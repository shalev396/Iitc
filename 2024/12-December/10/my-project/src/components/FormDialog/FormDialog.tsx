import * as React from "react";
import {
  Button,
  TextField,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Alert,
} from "@mui/material";
import { useTask } from "../providers/task-provider";
import { Task } from "../../types/task";
import { SelectChangeEvent } from "@mui/material/Select";

export default function FormDialog({ singleTask }) {
  const { setTask } = useTask();
  const [open, setOpen] = React.useState(false);
  const [error, setError] = React.useState<string>("");
  const [formData, setFormData] = React.useState({
    title: singleTask.title,
    description: singleTask.description,
    dueDate: new Date(singleTask.dueDate).toISOString().split("T")[0],
    priority: singleTask.priority,
    status: singleTask.status,
  });

  const validPriorities: Task["priority"][] = ["Low", "Medium", "High"];
  const validStatuses: Task["status"][] = [
    "Pending",
    "In Progress",
    "Completed",
  ];

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setError("");
  };

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      | SelectChangeEvent<any>
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

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setError("");

    if (!validateForm()) return;

    const updatedTask: Task = {
      id: singleTask.id,
      title: formData.title,
      description: formData.description,
      dueDate: new Date(formData.dueDate),
      priority: formData.priority as Task["priority"],
      status: formData.status as Task["status"],
    };

    try {
      await setTask(updatedTask);
      handleClose();
    } catch (error) {
      setError("Failed to update task");
      console.error("Failed to update task:", error);
    }
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth>
        <DialogTitle>{singleTask.title}</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <DialogContentText>Edit your task here</DialogContentText>
            {error && (
              <Alert severity="error" sx={{ mb: 2 }}>
                {error}
              </Alert>
            )}

            <TextField
              margin="dense"
              id="title"
              name="title"
              label="Title"
              type="text"
              fullWidth
              value={formData.title}
              onChange={handleChange}
              required
            />

            <TextField
              margin="dense"
              id="description"
              name="description"
              label="Description"
              type="text"
              fullWidth
              value={formData.description}
              onChange={handleChange}
              required
            />

            <TextField
              margin="dense"
              id="dueDate"
              name="dueDate"
              label="Due Date"
              type="date"
              fullWidth
              value={formData.dueDate}
              onChange={handleChange}
              required
              InputLabelProps={{ shrink: true }}
            />

            <FormControl fullWidth margin="dense" required>
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

            <FormControl fullWidth margin="dense" required>
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
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Save Changes</Button>
          </DialogActions>
        </form>
      </Dialog>
    </React.Fragment>
  );
}
