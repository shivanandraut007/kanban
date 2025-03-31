// src/components/Board.js
import React from 'react';
import Column from './Column';

// Board Component (Parent to Columns)
function Board(props) {
  return (
    <div className="board">
      {Object.keys(props.columns).map(function(key) {
        return (
          <Column
            key={key}
            status={key}
            title={props.columns[key].title}
            tasks={props.columns[key].tasks}  // Pass tasks to Column
            updateTaskStatus={props.updateTaskStatus}
          />
        );
      })}
    </div>
  );
}

export default Board;
