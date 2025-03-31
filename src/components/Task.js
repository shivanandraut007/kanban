// src/components/Task.js
import React from 'react';

// Task Component (Draggable Task Item)
function Task(props) {
  // Function to handle drag start
  function handleDragStart(e) {
    e.dataTransfer.setData('taskId', props.task.id);  // Store task ID
    e.dataTransfer.setData('fromStatus', props.status); // Store original column
  }

  return (
    <div className="task" draggable onDragStart={handleDragStart}>
      <h3>{props.task.name}</h3> 
      <p>Due: {props.task.dueDate}</p>
      <p>Status: {props.task.status}</p>
    </div>
  );
}

export default Task;
