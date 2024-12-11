import React, { useRef, useState } from "react";
import { generateRandomId } from "../../util/util";
import { Task } from "../../types/task";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  Box,
  Alert,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select";

export default function TaskItem({ onAddTask }) {
  const [error, setError] = useState<string>("");
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dueDate: "",
    priority: "",
    status: "",
  });

  const validPriorities: Task["priority"][] = ["Low", "Medium", "High"];
  const validStatuses: Task["status"][] = [
    "Pending",
    "In Progress",
    "Completed",
  ];

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent
  ) => {
    const { name, value } = e.target as { name: string; value: unknown };
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = (): boolean => {
    if (!formData.title.trim()) {
      setError("Title is required");
      return false;
    }
    if (!formData.description.trim()) {
      setError("Description is required");
      return false;
    }
    if (!formData.dueDate) {
      setError("Due date is required");
      return false;
    }
    if (!validPriorities.includes(formData.priority as Task["priority"])) {
      setError("Invalid priority value");
      return false;
    }
    if (!validStatuses.includes(formData.status as Task["status"])) {
      setError("Invalid status value");
      return false;
    }
    return true;
  };

  const handleAdd = async () => {
    setError("");
    if (!validateForm()) return;

    const newTask: Task = {
      id: generateRandomId(10),
      title: formData.title,
      description: formData.description,
      dueDate: new Date(formData.dueDate),
      priority: formData.priority as Task["priority"],
      status: formData.status as Task["status"],
    };

    try {
      await onAddTask(newTask);
      setFormData({
        title: "",
        description: "",
        dueDate: "",
        priority: "",
        status: "",
      });
    } catch (error) {
      setError("Failed to add task");
      console.error("Failed to add task:", error);
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {error && <Alert severity="error">{error}</Alert>}

      <TextField
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        required
      />

      <TextField
        label="Description"
        name="description"
        value={formData.description}
        onChange={handleChange}
        required
      />

      <TextField
        type="date"
        label="Due Date"
        name="dueDate"
        value={formData.dueDate}
        onChange={handleChange}
        required
        InputLabelProps={{ shrink: true }}
      />

      <FormControl required>
        <InputLabel>Priority</InputLabel>
        <Select
          name="priority"
          value={formData.priority}
          onChange={handleChange}
          label="Priority"
        >
          {validPriorities.map((priority) => (
            <MenuItem key={priority} value={priority}>
              {priority}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <FormControl required>
        <InputLabel>Status</InputLabel>
        <Select
          name="status"
          value={formData.status}
          onChange={handleChange}
          label="Status"
        >
          {validStatuses.map((status) => (
            <MenuItem key={status} value={status}>
              {status}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Button variant="contained" onClick={handleAdd}>
        Add Task
      </Button>
    </Box>
  );
}
