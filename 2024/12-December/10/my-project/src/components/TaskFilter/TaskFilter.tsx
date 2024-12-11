import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Task } from "../../types/task";

interface TaskFilterProps {
  onFilterChange: (filter: {
    status?: Task["status"];
    priority?: Task["priority"];
  }) => void;
}

export default function TaskFilter({ onFilterChange }: TaskFilterProps) {
  const [status, setStatus] = useState<Task["status"] | "">("");
  const [priority, setPriority] = useState<Task["priority"] | "">("");

  const handleStatusChange = (value: string) => {
    setStatus(value as Task["status"] | "");
    onFilterChange({ status: value as Task["status"] });
  };

  const handlePriorityChange = (value: string) => {
    setPriority(value as Task["priority"] | "");
    onFilterChange({ priority: value as Task["priority"] });
  };

  return (
    <div style={{ display: "flex", gap: "1rem", marginBottom: "1rem" }}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Status</InputLabel>
        <Select
          value={status}
          label="Status"
          onChange={(e) => handleStatusChange(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Pending">Pending</MenuItem>
          <MenuItem value="In Progress">In Progress</MenuItem>
          <MenuItem value="Completed">Completed</MenuItem>
        </Select>
      </FormControl>

      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel>Priority</InputLabel>
        <Select
          value={priority}
          label="Priority"
          onChange={(e) => handlePriorityChange(e.target.value)}
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="High">High</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}
