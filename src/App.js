// src/App.js
import React from 'react';
import KanbanBoard from './KanbanBoard';

function App() {
  return (
    <div className="App">
      <h1 id="heading">Add here your  task "."</h1>
      <h1>Kanban To-Do List</h1> 
      <KanbanBoard />
    </div>
  );
}

export default App;
