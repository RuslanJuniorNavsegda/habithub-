// components/TaskList.js
"use client";

import React, { useState, useEffect } from "react";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [priority, setPriority] = useState("medium"); // Default priority
  const [theme, setTheme] = useState("light"); // Добавили состояние для темы

  // Load tasks and theme from localStorage on component mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme); // Устанавливаем тему из localStorage
    document.body.className = savedTheme; // Задаем класс для body
  }, []);

  // Save tasks in localStorage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  // Toggle theme and save it in localStorage
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.body.className = newTheme;
  };

  // Add a new task
  const handleAddTask = () => {
    if (newTask.trim()) {
      setTasks([
        ...tasks,
        { id: Date.now(), text: newTask, completed: false, priority },
      ]);
      setNewTask("");
      setPriority("medium"); // Reset priority after adding
    }
  };

  // Delete a task by id
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // Toggle task completion status
  const handleToggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div style={{ marginTop: "1rem" }}>
      <h2>My Tasks</h2>
      <button onClick={toggleTheme} style={{ marginBottom: "1rem" }}>
        Toggle Theme ({theme.charAt(0).toUpperCase() + theme.slice(1)})
      </button>
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      />
      <select
        value={priority}
        onChange={(e) => setPriority(e.target.value)}
        style={{ marginRight: "0.5rem", padding: "0.5rem" }}
      >
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
      <ul style={{ listStyleType: "none", padding: 0 }}>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onToggleComplete={handleToggleComplete}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
