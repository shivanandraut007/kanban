// src/KanbanBoard.js
import React, { useState } from 'react';
import Board from './components/Board';
import AddTaskForm from './components/AddTaskForm';

const initialColumns = {
  pending: { title: 'Pending', tasks: [] },
  working: { title: 'Working', tasks: [] },
  done: { title: 'Done', tasks: [] }
};

function KanbanBoard() {
  const [columns, setColumns] = useState(initialColumns);

  // Function to add a new task
  function addTask(task) {
    setColumns(function (prevColumns) {
      const column = prevColumns[task.status];
      return {
        ...prevColumns,
        [task.status]: {
          ...column,
          tasks: column.tasks.concat(task)
        }
      };
    });
  }

  // Function to update task status (for drag & drop)
  function updateTaskStatus(taskId, fromStatus, toStatus) {
    setColumns(function (prevColumns) {
      var taskToMove = prevColumns[fromStatus].tasks.find(function (task) {
        return task.id === taskId;
      });
      if (!taskToMove) {
        return prevColumns;
      }
      return {
        ...prevColumns,
        [fromStatus]: {
          ...prevColumns[fromStatus],
          tasks: prevColumns[fromStatus].tasks.filter(function (task) {
            return task.id !== taskId;
          })
        },
        [toStatus]: {
          ...prevColumns[toStatus],
          tasks: prevColumns[toStatus].tasks.concat({ ...taskToMove, status: toStatus })
        }
      };
    });
  }

  return (
    <div className="kanban-board">
      <AddTaskForm addTask={addTask} />
      <Board columns={columns} updateTaskStatus={updateTaskStatus} />
      <footer className="status-count">
        {Object.keys(columns).map(function (status) {
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
