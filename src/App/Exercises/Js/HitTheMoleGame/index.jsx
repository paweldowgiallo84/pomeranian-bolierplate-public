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
  const [randomMoles, setRandomMoles] = useState([]);

  const startTimer = () => {
    setGameTime(gameTime);
    setScoreCount(0);
    setSeconds(seconds - 1);
    setIsCountingDown((current) => !current);
    setShowMoles((current) => !current);
  };

  const stopTimer = () => {
    setIsCountingDown((current) => !current);
    setShowMoles((current) => !current);
  };

  const hihgScore = (scoreCount) => {
    let score = localStorage.getItem('highscore');
    scoreCount > score
      ? localStorage.setItem('highscore', scoreCount + 1)
      : console.log(score);
  };

  useEffect(() => {
    setSeconds(gameTime / 1000);
  }, [gameTime]);

  useEffect(() => {
    let intervalId;

    if (isCountingDown) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds - 1);
        if (seconds <= 1 || scoreCount >= 200) {
          stopTimer();
          clearInterval(intervalId);
        }
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [seconds, isCountingDown, scoreCount]);

  const showRandomMole = () => {
    let newRandomMoles = [];

    const getRandomMole = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    for (let i = 0; i < howManyMoles; i++) {
      let randomMole;
      do {
        randomMole = getRandomMole(0, moleArray.length - 1);
      } while (newRandomMoles.includes(randomMole));

      newRandomMoles.push(randomMole);
    }

    setRandomMoles(newRandomMoles);

    console.log('random moles: ', randomMoles);

    setMoleArray((prevMoleArray) =>
      prevMoleArray.map((mole, index) => {
        mole.isVisible = false;
        if (randomMoles.includes(index)) {
          return { ...mole, isVisible: true };
        }
        return mole;
      })
    );
  };
  console.log(moleArray);

  useEffect(() => {
    let intervalId;

    if (isCountingDown) {
      intervalId = setInterval(() => {
        showRandomMole();
      }, moleSpede / 1.5);
    }

    return () => clearInterval(intervalId);
  }, [seconds, isCountingDown, randomMoles]);

  // ------------------------------------------

  function hitTheMole(index) {
    if (moleArray[index].isVisible) {
      setScoreCount(scoreCount + 1);
      setMoleArray((prevValue) => {
        const newMoleArray = [...prevValue];
        newMoleArray[index].isVisible = false;
        hihgScore(scoreCount);
        return newMoleArray;
      });
    }
  }

  return (
    <>
      <TitleAndDescription />
      {!isCountingDown && scoreCount >= 1 ? (
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
