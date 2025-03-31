// src/components/Column.js
import React from 'react';
import Task from './Task';

function Column(props) {
  function handleDragOver(e) {
    e.preventDefault();
  }

  function handleDrop(e) {
    e.preventDefault();
    var taskId = e.dataTransfer.getData('taskId');
    var fromStatus = e.dataTransfer.getData('fromStatus');
    if (props.updateTaskStatus) {
      props.updateTaskStatus(Number(taskId), fromStatus, props.status);
    }
  }

  return (
    <div className="column" onDragOver={handleDragOver} onDrop={handleDrop}>
      <h2>{props.title}</h2>
      {props.tasks.map(function (task) {
        return <Task key={task.id} task={task} status={props.status} />;
      })}
    </div>
  );
}

export default Column;
