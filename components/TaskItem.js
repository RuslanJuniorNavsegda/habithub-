// components/TaskItem.js
import React from "react";

const TaskItem = ({ task, onDelete, onToggleComplete }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case "high":
        return "red";
      case "medium":
        return "orange";
      case "low":
        return "green";
      default:
        return "black";
    }
  };

  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "0.5rem",
        padding: "0.5rem",
        border: "1px solid #ddd",
        borderRadius: "4px",
        backgroundColor: task.completed ? "#f0f0f0" : "white",
      }}
    >
      <span
        onClick={() => onToggleComplete(task.id)}
        style={{
          textDecoration: task.completed ? "line-through" : "none",
          cursor: "pointer",
          color: getPriorityColor(task.priority),
        }}
      >
        {task.text} (
        {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)})
      </span>
      <button
        onClick={() => onDelete(task.id)}
        style={{
          marginLeft: "1rem",
          padding: "0.3rem 0.6rem",
          backgroundColor: "red",
          color: "white",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
