import React from 'react';
import './StartStopResetButton.css';

const StartStopResetButton = ({
  isCountingDown,
  startTimer,
  stopTimer,
  resetGame,
  endGame,
}) => {
  return (
    <div className="wackTheMoleMain wtm__main__startstop">
      <div className="start__stop__button">
        <div className="description">
          <p>PRZYCISKI STERUJĄCY:</p>
        </div>
        <div className="btns">
          {endGame ? (
            <button className="btn" onClick={() => resetGame()}>
              Reset
            </button>
          ) : !isCountingDown ? (
            <button className="btn" onClick={() => startTimer()}>
              Start
            </button>
          ) : (
            <button className="btn" onClick={() => stopTimer()}>
              Stop
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StartStopResetButton;
