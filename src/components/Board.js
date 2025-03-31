// src/components/Board.js
import React from 'react';
import Column from './Column';

function Board(props) {
  return (
    <div className="board">
      {Object.keys(props.columns).map(function (key) {
        return (
          <Column
            key={key}
            status={key}
            title={props.columns[key].title}
            tasks={props.columns[key].tasks}
            updateTaskStatus={props.updateTaskStatus} 
          />
        );
      })}
    </div>
  );
}

export default Board;
