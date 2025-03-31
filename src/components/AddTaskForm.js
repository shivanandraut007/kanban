// src/components/AddTaskForm.js
import React, { useState } from 'react';

function AddTaskForm(props) {
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('pending');

  function handleTaskNameChange(e) {
    setTaskName(e.target.value);
  }

  function handleDueDateChange(e) {
    setDueDate(e.target.value);
  }

  function handleStatusChange(e) {
    setStatus(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (taskName && dueDate) {
      const newTask = { 
        id: Date.now(),
        name: taskName,
        dueDate: dueDate,
        status: status
      };
      props.addTask(newTask);
      setTaskName('');
      setDueDate('');
      setStatus('pending');
    }
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={handleTaskNameChange}
        required
      />
      <input
        type="date"
        value={dueDate}
        onChange={handleDueDateChange}
        required
      />
      <select value={status} onChange={handleStatusChange}>
        <option value="pending">Pending</option>
        <option value="working">Working</option>
        <option value="done">Done</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
