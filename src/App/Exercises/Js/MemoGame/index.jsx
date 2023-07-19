import React, { useEffect, useState } from 'react';
import TitleAndDescription from './components/TitleAndDescription';
import Settings from './components/Settings';
import StartButton from './components/StartButton';
import Gameboard from './components/Gameboard';
import Result from './components/Result';
import GameInProgress from './components/GameInProgress';

import './styles.css';

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

export const MemoGame = () => {
  const DEFAULT_BOARD_SIZE = 16;
  const [boardSize, setBoardSize] = useState(DEFAULT_BOARD_SIZE);
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [seconds, setSeconds] = useState(0);
  const [shuffleChars, setShuffleChars] = useState([]);
  const [steps, setSteps] = useState(0);
  const [pickFirst, setPickFirst] = useState(null);
  const [pickSeccond, setPickSeccond] = useState(null);

  //-----------------------start-----startStopGame------------------working-
  const startStopGame = () => {
    setIsGameStarted((current) => !current);
    generateRandomArray();
  };
  //-------------------------end-----startStopGame--------------------------

  useEffect(() => {
    setSeconds(0);
  }, [isGameStarted]);

  //----------------------start-----time-counter-------------------working-
  useEffect(() => {
    let intervalId;

    if (isGameStarted) {
      intervalId = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    }
    return () => clearInterval(intervalId);
  }, [seconds, isGameStarted]);
  //---------------------------end-----time-counter-------------------------------------

  //------------------------start-----generating-random-character-array-------- working-
  const generateRandomArray = () => {
    const sortedChar = [...characters].sort(() => Math.random() - 0.5);
    const randomChar = sortedChar.slice(0, boardSize / 2);

    function createChar(character, index) {
      return { character, id: index, isGuessed: false, isVisible: false };
    }

    const randomArray = [...randomChar, ...randomChar]
      .sort(() => Math.random() - 0.5)
      .map((character, index) => createChar(character, index));

    setShuffleChars(randomArray);
    setSteps(0);
  };
  //------------------------end-----generating-random-character-array----------

  //-------------------------------------------------------------------

  useEffect(() => {
    if (pickFirst && pickSeccond) {
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
        nextTurn();
      } else {
        setTimeout(() => nextTurn(), 1000);
      }
    }
  }, [pickFirst, pickSeccond]);

  //-------------------------------------------------------------

  //-----------------------------------------------------------------------------
  function inspectChar(card) {
    //   // if (!card.isVisible || !card.isGuessed) {
    //   //   setPickFirst(card);
    //   //   setShuffleChars.isVisible = true;
    //   //   console.log(pickFirst);
    //   // }

    if (pickFirst) {
      setPickSeccond(card);
    } else {
      setPickFirst(card);
      setShuffleChars.isVisible = true;
    }
    console.log(card);
  }

  // console.log(pickFirst, pickSeccond);

  function nextTurn() {
    setPickFirst(null);
    setPickSeccond(null);
    setSteps((prevSteps) => prevSteps + 1);
  }

  function classOfElement(card) {
    const classes = ['cell'];
    if (card.isGuessed) {
      classes.push('guessed');
    }
    if (!card.isVisible && !card.isGuessed) {
      classes.push('closed');
    }
    return classes.join(' ');
  }

  return (
    <>
      <div>
        <div>
          <TitleAndDescription />
        </div>
        <div>
          {isGameStarted ? <Result seconds={seconds} steps={steps} /> : null}
        </div>
        <div>
          {!isGameStarted ? (
            <Settings boardSize={boardSize} setBoardSize={setBoardSize} />
          ) : (
            <GameInProgress seconds={seconds} steps={steps} />
          )}
        </div>
        <div>
          <StartButton
            startStopGame={startStopGame}
            isGameStarted={isGameStarted}
          />
        </div>
        <div>
          {isGameStarted ? (
            <Gameboard
              inspectChar={inspectChar}
              shuffleChars={shuffleChars}
              classOfElemen={classOfElement}
            />
          ) : null}
        </div>
      </div>
    </>
  );
};
