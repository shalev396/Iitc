import * as React from "react";
import { extendTheme, styled } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import BarChartIcon from "@mui/icons-material/BarChart";
import DescriptionIcon from "@mui/icons-material/Description";
import LayersIcon from "@mui/icons-material/Layers";
import { AppProvider, Navigation, Router } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import Grid from "@mui/material/Grid2";
import { useEffect, useRef, useState } from "react";
import { useTask } from "../providers/task-provider";
import { api } from "../../api";
import AddTaskItem from "../TaskItem/AddTaskItem";
import SingleTask from "../SingleTask/SingleTask";
const NAVIGATION: Navigation = [
  {
    kind: "header",
    title: "Main items",
  },
  {
    segment: "dashboard",
    title: "Tasks",
    icon: <DashboardIcon />,
  },
  {
    segment: "orders",
    title: "Orders",
    icon: <ShoppingCartIcon />,
  },
  {
    kind: "divider",
  },
  {
    kind: "header",
    title: "Analytics",
  },
  {
    segment: "reports",
    title: "Reports",
    icon: <BarChartIcon />,
    children: [
      {
        segment: "sales",
        title: "Sales",
        icon: <DescriptionIcon />,
      },
      {
        segment: "traffic",
        title: "Traffic",
        icon: <DescriptionIcon />,
      },
    ],
  },
  {
    segment: "integrations",
    title: "Integrations",
    icon: <LayersIcon />,
  },
];

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  const router = React.useMemo(() => {
    return {
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    };
  }, [pathname]);

  return router;
}

export interface Task {
  id: string;
  title: string;
  description: string;
  dueDate: Date;
  priority: "Low" | "Medium" | "High";
  status: "Pending" | "In Progress" | "Completed";
}
export default function DashboardLayoutBasic() {
  const router = useDemoRouter("/dashboard");
  const {
    tasks: contextTasks,
    addTask,
    delTask,
    setTask,
    getAllTask,
  } = useTask(); // Access tasks and functions from context
  const [Tasks, setTasks] = useState<Task[]>([]);
  useEffect(() => {
    async function fetchTasks() {
      const allTasks = await getAllTask();
      if (allTasks) setTasks(allTasks);
    }
    fetchTasks();
  }, [contextTasks]);

  console.log(Tasks);

  if (!Tasks.length) {
    return <div>Loading tasks...</div>;
  }

  const handleAddTask = async (newTask: Task) => {
    await addTask(newTask);
    setTasks((prev) => [...prev, newTask]);
  };

  const handleUpdateTask = async (updatedTask: Task) => {
    await setTask(updatedTask);
    setTasks((prev) =>
      prev.map((task) => (task.id === updatedTask.id ? updatedTask : task))
    );
  };

  const handleDeleteTask = async (taskId: string) => {
    await delTask(taskId);
    setTasks((prev) => prev.filter((task) => task.id !== taskId));
  };
  return (
    <AppProvider
      navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
      // window={demoWindow}
    >
      <DashboardLayout>
        <PageContainer>
          <Grid container spacing={1}>
            <AddTaskItem onAddTask={handleAddTask} />

            <ul>
              {Tasks.map((task) => (
                <SingleTask
                  key={task.id}
                  singleTask={task}
                  onUpdateTask={handleUpdateTask}
                  onDeleteTask={handleDeleteTask}
                />
              ))}
            </ul>
          </Grid>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
