import React, { useEffect, useState } from 'react';
import Settings from './Settings/Settings';
import StartButton from './StartButton/StartButton';
import Gameboard from './Gameboard/Gameboard';
import Result from './Result/Result';
import GameInProgress from './GameInProgress/GameInProgress';

import './Memo.css';

const CHARACTERS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const DEFAULT_BOARD_SIZE = 16;

export const Memo = () => {
  const [boardSize, setBoardSize] = useState(DEFAULT_BOARD_SIZE);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [shuffleChars, setShuffleChars] = useState([]);
  const [steps, setSteps] = useState(0);
  const [pickFirst, setPickFirst] = useState(null);
  const [pickSeccond, setPickSeccond] = useState(null);
  const [cardIsSelected, setCardIsSelected] = useState(false);
  const [guessedCount, setGuessedCount] = useState(boardSize);
  const [finishGameTime, setFinishGameTime] = useState(0);
  const [finishSteps, setFinishSteps] = useState(0);
  const [gameStop, setGameStop] = useState(false);

  useEffect(() => {
    setSeconds(0);
  }, [isGameStarted]);

  useEffect(() => {
    if (guessedCount === 0) setGameStop(true);
  }, [guessedCount]);

  useEffect(() => {
    let intervalId;

    if (isGameStarted) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [seconds, isGameStarted]);

  useEffect(() => {
    if (guessedCount === 0) {
      setFinishGameTime(seconds);
      setFinishSteps(steps);
    } else {
      if (pickFirst && pickSeccond) {
        setCardIsSelected(true);
        if (pickFirst.character === pickSeccond.character) {
          setShuffleChars((prevChars) => {
            return prevChars.map((card) => {
              if (card.character === pickFirst.character) {
                return { ...card, isGuessed: true };
              } else {
                return card;
              }
            });
          });
          setGuessedCount((guessedCount) => guessedCount - 1);
          nextTurn();
        } else {
          setTimeout(() => {
            setShuffleChars((prevChars) => {
              return prevChars.map((card) => {
                return { ...card, isVisible: false };
              });
            });
          }, 1000);
          setTimeout(() => nextTurn(), 1000);
        }
      }
    }
  }, [pickFirst, pickSeccond]);

  const startStopGame = () => {
    setIsGameStarted((current) => !current);
    generateRandomArray();
  };

  const generateRandomArray = () => {
    const sortedChar = [...CHARACTERS].sort(() => Math.random() - 0.5);
    const randomChar = sortedChar.slice(0, boardSize / 2);

    function createChar(character, index) {
      return { character, id: index, isGuessed: false, isVisible: false };
    }

    const randomArray = [...randomChar, ...randomChar]
      .sort(() => Math.random() - 0.5)
      .map((character, index) => createChar(character, index));

    setShuffleChars(randomArray);
    setGuessedCount(boardSize / 2);
    setSteps(0);
  };

  const inspectChar = (card) => {
    pickFirst ? setPickSeccond(card) : setPickFirst(card);

    card.isVisible = true;
  };

  function nextTurn() {
    setPickFirst(null);
    setPickSeccond(null);
    setSteps((prevSteps) => prevSteps + 1);
    setCardIsSelected(false);
  }

  function classOfElement(card) {
    const classes = ['cell'];
    if (card.isGuessed) {
      classes.push('guessed');
    }
    if (card.isVisible && !card.isGuessed && pickFirst && pickSeccond) {
      classes.push('closed');
    }
    return classes.join(' ');
  }

  return (
    <>
      <div>
        <div>
          {guessedCount === 0 ? (
            <Result
              finishGameTime={finishGameTime}
              finishSteps={finishSteps}
              boardSize={boardSize}
            />
          ) : null}
        </div>
        <div>
          {!isGameStarted || gameStop ? (
            <Settings boardSize={boardSize} setBoardSize={setBoardSize} />
          ) : (
            <GameInProgress seconds={seconds} steps={steps} />
          )}
        </div>
        <div>
          <StartButton
            startStopGame={startStopGame}
            isGameStarted={isGameStarted}
            gameStop={gameStop}
          />
        </div>
        <div>
          {isGameStarted && guessedCount !== 0 ? (
            <Gameboard
              inspectChar={inspectChar}
              shuffleChars={shuffleChars}
              classOfElement={classOfElement}
              cardIsSelected={cardIsSelected}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};
