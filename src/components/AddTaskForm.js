// src/components/AddTaskForm.js
import React, { useState } from 'react';

// Add Task Form Component
function AddTaskForm(props) {
  // State to store input values
  const [taskName, setTaskName] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [status, setStatus] = useState('pending');

  // Function to handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload

    if (taskName && dueDate) {  // Ensure fields are filled
      var newTask = {
        id: Date.now(),  // Generate a unique ID
        name: taskName,
        dueDate: dueDate,
        status: status
      };

      props.addTask(newTask);  // Send new task to KanbanBoard
      setTaskName(''); // Clear form
      setDueDate('');
      setStatus('pending');
    }
  }

  return (
    <form className="add-task-form" onSubmit={handleSubmit}>
      {/* Task name input */}
      <input
        type="text"
        placeholder="Task Name"
        value={taskName}
        onChange={function(e) { setTaskName(e.target.value); }}
        required
      />
      
      {/* Due date input */}
      <input
        type="date"
        value={dueDate}
        onChange={function(e) { setDueDate(e.target.value); }}
        required
      />
      
      {/* Status dropdown */}
      <select value={status} onChange={function(e) { setStatus(e.target.value); }}>
        <option value="pending">Pending</option>
        <option value="working">Working</option>
        <option value="done">Done</option>
      </select>
      
      {/* Submit button */}
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
