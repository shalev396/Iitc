import * as React from "react";
import { extendTheme } from "@mui/material/styles";
import { AppProvider, Navigation, Router } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { PageContainer } from "@toolpad/core/PageContainer";
import { Box, Container, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Grid";
import { useEffect, useState } from "react";
import { useTask } from "../providers/task-provider";
import AddTaskItem from "../TaskItem/AddTaskItem";
import SingleTask from "../SingleTask/SingleTask";
import TaskFilter from "../TaskFilter/TaskFilter";
import { Task } from "../../types/task";

const demoTheme = extendTheme({
  colorSchemes: { light: true, dark: true },
  colorSchemeSelector: "class",
});

function useDemoRouter(initialPath: string): Router {
  const [pathname, setPathname] = React.useState(initialPath);

  return React.useMemo(
    () => ({
      pathname,
      searchParams: new URLSearchParams(),
      navigate: (path: string | URL) => setPathname(String(path)),
    }),
    [pathname]
  );
}

export default function DashboardLayoutBasic() {
  const router = useDemoRouter("/dashboard");
  const {
    tasks: contextTasks,
    addTask,
    delTask,
    setTask,
    getAllTask,
  } = useTask();

  const [tasks, setTasks] = useState<Task[]>([]);
  const [filterStatus, setFilterStatus] = useState<Task["status"] | "">("");
  const [filterPriority, setFilterPriority] = useState<Task["priority"] | "">(
    ""
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTasks() {
      setIsLoading(true);
      const allTasks = await getAllTask();
      if (allTasks) setTasks(allTasks);
      setIsLoading(false);
    }
    fetchTasks();
  }, [contextTasks]);

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

  const handleFilterChange = ({
    status,
    priority,
  }: {
    status?: Task["status"];
    priority?: Task["priority"];
  }) => {
    if (status !== undefined) setFilterStatus(status);
    if (priority !== undefined) setFilterPriority(priority);
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesStatus = !filterStatus || task.status === filterStatus;
    const matchesPriority = !filterPriority || task.priority === filterPriority;
    return matchesStatus && matchesPriority;
  });

  return (
    <AppProvider
      // navigation={NAVIGATION}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout>
        <PageContainer>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper sx={{ p: 3, display: "flex", flexDirection: "column" }}>
                  <Typography variant="h4" gutterBottom>
                    Task Management
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    <TaskFilter onFilterChange={handleFilterChange} />
                  </Box>

                  <Box sx={{ mb: 3 }}>
                    <AddTaskItem onAddTask={handleAddTask} />
                  </Box>

                  {isLoading ? (
                    <Typography>Loading tasks...</Typography>
                  ) : (
                    <Grid container spacing={2}>
                      {filteredTasks.map((task) => (
                        <Grid item xs={12} sm={6} md={4} key={task.id}>
                          <SingleTask
                            singleTask={task}
                            onUpdateTask={handleUpdateTask}
                            onDeleteTask={handleDeleteTask}
                          />
                        </Grid>
                      ))}
                    </Grid>
                  )}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </PageContainer>
      </DashboardLayout>
    </AppProvider>
  );
}
