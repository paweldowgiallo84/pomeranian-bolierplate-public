import React, { useEffect } from 'react';
import { useState } from 'react';
import Cell from './components/Cell';
import './styles.css';

export function TicTacToe() {
  const [board, setBoard] = useState(['', '', '', '', '', '', '', '', '']);
  const [ticTacToe, setTicTacToe] = useState('circle');
  const [message, setMessage] = useState(null);
  const [whoWins, SetWhoWins] = useState(null);

  const whoseTurn = () => {
    setMessage("Now it's " + ticTacToe + ' turn');
  };

  useEffect(() => {
    whoseTurn();
    winingArray();
  }, [board]);

  const winingArrays = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
 
  const winingArray = () => {
    winingArrays.forEach((Array) => {
      let circleWins = Array.every((cell) => board[cell] === 'circle');
      if (circleWins) {
        SetWhoWins('Wygrały kółka!');
        return;
      }
      let crossWins = Array.every((cell) => board[cell] === 'cross');
      if (crossWins) {
        SetWhoWins('Wygrały krzyże');
        return;
      }
    });
  };

  return (
    <div className="tic-tac-toe_container">
      <div className="game_board">
        {board.map((cell, index) => (
          <Cell
            key={index}
            id={index}
            cell={cell}
            setBoard={setBoard}
            ticTacToe={ticTacToe}
            setTicTacToe={setTicTacToe}
            board={board}
            whoWins={whoWins}
          />
        ))}
      </div>
      <p className="message">{whoWins || message}</p>
    </div>
  );
}
