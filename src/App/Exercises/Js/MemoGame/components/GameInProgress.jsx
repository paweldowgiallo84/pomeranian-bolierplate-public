import React from 'react';

const GameInProgress = ({ seconds, steps }) => {
  let minutesToFinish = Math.floor(seconds / 60);
  let secondsToFinish = seconds % 60;
  return (
    <div>
      <div className="memo_game_main">
        <div className="memo_game_in_progress">
          <div className="description">
            <span>CZAS GRY</span>
            <span>LICZBA RUCHÓW</span>
          </div>
          <div className="time_and_steps">
            <span>
              {minutesToFinish.toString().padStart(1, 0)}:
              {secondsToFinish.toString().padStart(2, 0)}
            </span>
            <span>{steps}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GameInProgress;
