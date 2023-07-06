import React, { useState, useEffect } from 'react';

import GameBoard from './Board';
import { GameSettings } from './Settings';

import './styles.css';

export function HitTheMoleGame() {
  const defaultGameTime = 2 * 60 * 1000;
  const [gameTime, setGameTime] = useState(defaultGameTime);
  const [howManyMoles, setHowManyMoles] = useState(1);
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isHit: false })
  );
  const [seconds, setSeconds] = useState(gameTime / 1000);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);

  const startTimer = () => {
    setSeconds(seconds - 1);
    setIsCountingDown((current) => !current);
  };

  useEffect(() => {
    setSeconds(gameTime / 1000);
  }, [gameTime]);

  //------vvvvvv------- in game tick -----vvvvvv------

  useEffect(() => {
    let intervalId;

    if (isCountingDown) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
      }, 1000);
    }
    console.log(seconds.toString().padStart(2, 0));
    return () => clearInterval(intervalId);
  }, [seconds]);

  function hitTheMole(index) {
    if (!moleArray[index].isVisible) return;
    moleArray[index].isHit = !moleArray[index].isHit;
  }

  return (
    <>
      <GameSettings
        gameTime={gameTime}
        howManyMoles={howManyMoles}
        setHowManyMoles={setHowManyMoles}
        setGameTime={setGameTime}
        startTimer={startTimer}
      />
      <GameBoard
        moleArray={moleArray}
        hitTheMole={hitTheMole}
        scoreCount={scoreCount}
      />
    </>
  );
}
