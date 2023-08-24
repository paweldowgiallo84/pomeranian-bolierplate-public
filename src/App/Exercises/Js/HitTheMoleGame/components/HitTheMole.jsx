import React, { useState, useEffect } from 'react';

import GameBoard from './Board/Board';
import { GameSettings } from './Settings/Settings';
import { GameInProgress } from './GameInProgress/GameInProgress';
import { TitleAndDescription } from './TitleAndDescription/TitleAndDescription';
import { GameResult } from './GameResult/GameResult';
import StartStopResetButton from './StartStopResetButton/StartStopResetButton';

import './styles.css';

const DEFAULT_GAME_TIME = 2 * 60 * 1000;
const MOLE_SPEED = 1000;
const DEFAULT_ARRAY = Array(10).fill({ isVisible: false, isHit: false });

export function HitTheMole() {
  const [gameTime, setGameTime] = useState(DEFAULT_GAME_TIME);
  const [howManyMoles, setHowManyMoles] = useState(1);
  const [moleArray, setMoleArray] = useState(DEFAULT_ARRAY);
  const [seconds, setSeconds] = useState(gameTime / 1000);
  const [isCountingDown, setIsCountingDown] = useState(false);
  const [endGame, setEndGame] = useState(false);
  const [scoreCount, setScoreCount] = useState(0);
  const [randomMoles, setRandomMoles] = useState([]);

  const startTimer = () => {
    setGameTime(gameTime);
    setScoreCount(0);
    setSeconds(seconds - 1);
    setIsCountingDown((current) => !current);
    setEndGame(false);
  };

  const stopTimer = () => {
    setIsCountingDown((current) => !current);
    setMoleArray(DEFAULT_ARRAY);
    setEndGame(true);
  };

  const resetGame = () => {
    setEndGame(false);
    setGameTime(null);
    setHowManyMoles(1);
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

  useEffect(() => {
    let intervalId;

    if (isCountingDown) {
      intervalId = setInterval(() => {
        showRandomMole();
      }, MOLE_SPEED / 1.8);
    }

    return () => clearInterval(intervalId);
  }, [seconds, isCountingDown, randomMoles]);

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
      {!isCountingDown && scoreCount >= 1 && endGame ? (
        <GameResult scoreCount={scoreCount} gameTime={gameTime} />
      ) : null}
      {!isCountingDown ? (
        <GameSettings
          gameTime={gameTime}
          howManyMoles={howManyMoles}
          setHowManyMoles={setHowManyMoles}
          setGameTime={setGameTime}
          scoreCount={scoreCount}
          endGame={endGame}
        />
      ) : (
        <GameInProgress
          gameTime={gameTime}
          howManyMoles={howManyMoles}
          seconds={seconds}
          scoreCount={scoreCount}
        />
      )}
      <StartStopResetButton
        isCountingDown={isCountingDown}
        startTimer={startTimer}
        stopTimer={stopTimer}
        resetGame={resetGame}
        endGame={endGame}
      />
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
