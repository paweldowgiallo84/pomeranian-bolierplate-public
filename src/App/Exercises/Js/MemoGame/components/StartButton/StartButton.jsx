import React from 'react';
import './StartButton.css';

const StartButton = ({ startStopGame, isGameStarted, gameStop }) => {
  return (
    <div className="memo__start">
      <div className="memo__start__stop">
        <div className="description">
          <span>PRZYCISKI STERUJĄCE</span>
        </div>
        <div className="btns">
          <button className="btn" onClick={() => startStopGame()}>
            {!isGameStarted ? 'START' : !gameStop ? 'STOP' : 'RESET'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartButton;
