import React, { useState, useEffect } from 'react';

import GameBoard from './Board';
import { GameSettings } from './Settings';
import { GameInProgress } from './GameInProgress';
import { TitleAndDescription } from './TitleAndDescription';
import { GameResult } from './GameResult';

import './styles.css';

export function HitTheMoleGame() {
  const DEFAULT_GAME_TIME = 2 * 60 * 1000;
  const moleSpede = 1000;
  const [gameTime, setGameTime] = useState(DEFAULT_GAME_TIME);
  const [howManyMoles, setHowManyMoles] = useState(1);
  const [moleArray, setMoleArray] = useState(
    Array(10).fill({ isVisible: false, isHit: false })
  );
  const [seconds, setSeconds] = useState(gameTime / 1000);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);
  const [showMoles, setShowMoles] = useState(false);

  const startTimer = () => {
    setSeconds(seconds - 1);
    setIsCountingDown((current) => !current);
    setShowMoles((current) => !current);
  };

  const stopTimer = () => {
    setGameTime(DEFAULT_GAME_TIME);
    setScoreCount(0);
    setIsCountingDown((current) => !current);
    setShowMoles((current) => !current);
  };

  useEffect(() => {
    setSeconds(gameTime / 1000);
  }, [gameTime]);

  useEffect(() => {
    let intervalId;

    if (isCountingDown) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
        if (seconds <= 0 || seconds < 1 || scoreCount >= 19) {
          setSeconds(0);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [seconds]);

  // ---vvvvvvvvvvvvvvvvvvvvv--- generate random moles using Math.random ---------------

  const showRandomMole = () => {
    const getRandomMole = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const randomMole = getRandomMole(0, moleArray.length - 1);

    setMoleArray((prevMoleArray) =>
      prevMoleArray.map((mole, index) => {
        mole.isVisible = false;
        const newMole = { ...mole };
        newMole.isVisible = index === randomMole;
        return newMole;
      })
    );
  };

  // --------vvvvvvvvvvvv---------- refreshing moles generator with useEffect --------------------

  useEffect(() => {
    let intervalId;

    if (isCountingDown) {
      intervalId = setInterval(() => {
        showRandomMole();
      }, moleSpede);
    }

    return () => clearInterval(intervalId);
  }, [seconds]);

  // ------------------------------------------

  function hitTheMole(index) {
    if (moleArray[index].isVisible) {
      setScoreCount(scoreCount + 1);
      setMoleArray((prevValue) => {
        const newMoleArray = [...prevValue];
        newMoleArray[index].isVisible = false;
        return newMoleArray;
      });
    }
  }

  return (
    <>
      <TitleAndDescription />
      {seconds <= 0 || seconds < 1 ? (
        <GameResult scoreCount={scoreCount} gameTime={gameTime} />
      ) : null}
      {!isCountingDown ? (
        <GameSettings
          gameTime={gameTime}
          howManyMoles={howManyMoles}
          setHowManyMoles={setHowManyMoles}
          setGameTime={setGameTime}
          startTimer={startTimer}
          seconds={seconds}
          scoreCount={scoreCount}
        />
      ) : (
        <GameInProgress
          gameTime={gameTime}
          howManyMoles={howManyMoles}
          setHowManyMoles={setHowManyMoles}
          setGameTime={setGameTime}
          stopTimer={stopTimer}
          seconds={seconds}
          scoreCount={scoreCount}
        />
      )}
      {isCountingDown ? (
        !seconds <= 0 || !seconds < 1 ? (
          <GameBoard
            moleArray={moleArray}
            hitTheMole={hitTheMole}
            scoreCount={scoreCount}
            seconds={seconds}
          />
        ) : null
      ) : null}
    </>
  );
}
