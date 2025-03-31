// src/components/Column.js
import React from 'react';
import Task from './Task';

// Column Component (Holds multiple tasks)
function Column(props) {
  // Function to allow dropping a task
  function handleDragOver(e) {
    e.preventDefault();
  }

  // Function to handle task drop
  function handleDrop(e) {
    e.preventDefault();
    var taskId = e.dataTransfer.getData('taskId');  // Get task ID
    var fromStatus = e.dataTransfer.getData('fromStatus'); // Get original status
    
    if (props.updateTaskStatus) {
      props.updateTaskStatus(Number(taskId), fromStatus, props.status); // Move task to new column
    }
  }

  return (
    <div className="column" onDragOver={handleDragOver} onDrop={handleDrop}>
      <h2>{props.title}</h2>
      {props.tasks.map(function(task) {
        return <Task key={task.id} task={task} status={props.status} />;
      })}
    </div>
  );
}

export default Column;
