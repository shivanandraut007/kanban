// src/components/Task.js
import React from 'react';

function Task(props) {
  function handleDragStart(e) {
    e.dataTransfer.setData('taskId', props.task.id);
    e.dataTransfer.setData('fromStatus', props.status);
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
