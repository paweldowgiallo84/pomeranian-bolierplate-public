import React from 'react';

const StartButton = ({ startStopGame, isGameStarted }) => {
  return (
    <div>
      <div className="memo_game_main">
        <div className="memo_option">
          <div className="description">
            <span>PRZYCISKI STERUJĄCE</span>
          </div>
          <div className="btns">
            <button className="btn" onClick={() => startStopGame()}>
              {!isGameStarted ? 'START' : 'STOP'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartButton;
