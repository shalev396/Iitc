import React from "react";
import { useTask } from "../providers/task-provider";
import FormDialog from "../FormDialog/FormDialog";
import { Task } from "../../types/task";
import {
  Card,
  CardContent,
  Typography,
  Box,
  Chip,
  Stack,
  IconButton,
  CardActions,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

interface SingleTaskProps {
  singleTask: Task;
  onUpdateTask: (updatedTask: Task) => Promise<void>;
  onDeleteTask: (taskId: string) => Promise<void>;
}

export default function SingleTask({
  singleTask,
  onUpdateTask,
  onDeleteTask,
}: SingleTaskProps) {
  const { delTask } = useTask();

  function deleteTask(id: string) {
    delTask(id);
  }

  const getPriorityColor = (priority: Task["priority"]) => {
    switch (priority) {
      case "High":
        return "error";
      case "Medium":
        return "warning";
      case "Low":
        return "success";
      default:
        return "default";
    }
  };

  const getStatusColor = (status: Task["status"]) => {
    switch (status) {
      case "Completed":
        return "success";
      case "In Progress":
        return "warning";
      case "Pending":
        return "error";
      default:
        return "default";
    }
  };

  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h2" gutterBottom>
          {singleTask.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" paragraph>
          {singleTask.description}
        </Typography>

        <Typography variant="body2" color="text.secondary" gutterBottom>
          Due: {new Date(singleTask.dueDate).toLocaleDateString()}
        </Typography>

        <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
          <Chip
            label={singleTask.priority}
            color={getPriorityColor(singleTask.priority)}
            size="small"
          />
          <Chip
            label={singleTask.status}
            color={getStatusColor(singleTask.status)}
            size="small"
          />
        </Stack>
      </CardContent>

      <CardActions sx={{ justifyContent: "flex-end" }}>
        <FormDialog singleTask={singleTask} />
        <IconButton
          aria-label="delete"
          onClick={() => deleteTask(singleTask.id)}
          color="error"
          size="small"
        >
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
