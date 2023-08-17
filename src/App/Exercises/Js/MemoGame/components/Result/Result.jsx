import React from 'react';
import './Result.css'

const Result = ({ finishGameTime, finishSteps, boardSize }) => {
  return (
    <div className="memo_game_main">
      <div className="memo_game_result">
        <h2>
          Gratulacje! Twój wynik to {boardSize} par w czasie
          {finishGameTime.toString().padStart(2, 0)}
        </h2>
        <h3>Gre skończyłeś w {finishSteps} ruchach</h3>
      </div>
    </div>
  );
};

export default Result;
