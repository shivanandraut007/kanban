// src/KanbanBoard.js
import React, { useState } from 'react';
import Board from './components/Board';
import AddTaskForm from './components/AddTaskForm';

// Initial columns with empty tasks
const initialColumns = {
  pending: { title: 'Pending', tasks: [] },
  working: { title: 'Working', tasks: [] },
  done: { title: 'Done', tasks: [] }
};

// KanbanBoard Component (Main)
function KanbanBoard() {
  // State to hold task columns
  const [columns, setColumns] = useState(initialColumns);

  // Function to add a new task
  function addTask(task) {
    setColumns(function(prevColumns) {
      var column = prevColumns[task.status]; // Get the column based on status
      return {
        ...prevColumns,
        [task.status]: {
          ...column,
          tasks: [...column.tasks, task] // Add new task to tasks array
        }
      };
    });
  }

  // Function to update task status when dragged and dropped
  function updateTaskStatus(taskId, fromStatus, toStatus) {
    setColumns(function(prevColumns) {
      var taskToMove = prevColumns[fromStatus].tasks.find(function(task) {
        return task.id === taskId;
      });

      if (!taskToMove) return prevColumns; // If no task found, return as is

      return {
        ...prevColumns,
        [fromStatus]: {
          ...prevColumns[fromStatus],
          tasks: prevColumns[fromStatus].tasks.filter(function(task) {
            return task.id !== taskId;
          })
        },
        [toStatus]: {
          ...prevColumns[toStatus],
          tasks: [...prevColumns[toStatus].tasks, { ...taskToMove, status: toStatus }]
        }
      };
    });
  }

  return (
    <div className="kanban-board">
      {/* Task input form */}
      <AddTaskForm addTask={addTask} />
      
      {/* Task display board */}
      <Board columns={columns} updateTaskStatus={updateTaskStatus} />
      
      {/* Footer showing count of tasks in each category */}
      <footer className="status-count">
        {Object.keys(columns).map(function(status) {
          return (
            <span key={status}>
              {columns[status].title}: {columns[status].tasks.length}&nbsp;&nbsp;
            </span>
          );
        })}
      </footer>
    </div>
  );
}

export default KanbanBoard;
