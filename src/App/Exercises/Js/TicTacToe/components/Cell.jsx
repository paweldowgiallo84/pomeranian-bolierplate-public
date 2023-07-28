import React from 'react';

const Cell = ({
  cell,
  id,
  setBoard,
  ticTacToe,
  setTicTacToe,
  board,
  whoWins,
}) => {
  const handleClick = (e) => {
    const ticOrToe =
      e.target.firstChild.classList.contains('circle') ||
      e.target.firstChild.classList.contains('cross');

    if (!ticOrToe) {
      if (ticTacToe === 'circle') {
        e.target.firstChild.classList.add('circle');
        ticOrToeChange('circle');
        setTicTacToe('cross');
      }
      if (ticTacToe === 'cross') {
        e.target.firstChild.classList.add('cross');
        ticOrToeChange('cross');
        setTicTacToe('circle');
      }
    }
  };

  const ticOrToeChange = (className) => {
    const newBoard = board.map((cell, index) => {
      if (index === id) {
        return className;
      } else {
        return cell;
      }
    });
    setBoard(newBoard);
  };

  return (
    <div id={id} className="ttt_cell" onClick={!whoWins && handleClick}>
      <div className={cell}></div>
    </div>
  );
};

export default Cell;
