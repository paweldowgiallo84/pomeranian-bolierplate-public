import { useEffect, useState } from 'react';
import './styles.css';

export const WhatNumber = () => {
  const [answer, setAnswer] = useState('');
  const [randomNumber, setRandomNumber] = useState(0);
  const [userNumber, setUserNumber] = useState(0);

  useEffect(() => {
    guesNumber(Number(randomNumber), Number(userNumber));
  }, [randomNumber, userNumber]);

  function randomize(ev) {
    setRandomNumber(Math.floor(Math.random() * 21 + 1));
  }

  function userChoice(ev) {
    setUserNumber(ev.target.value);
  }
  console.log(randomNumber);
  console.log(userNumber);

  function guesNumber(x, y) {
    if (x === 0) {
      setAnswer('Naciśnij START aby zacząć');
    } else if (y === 0) {
      setAnswer('Zgadnij Liczbę');
    } else if (x < y) {
      setAnswer('Mam niższą wartość.');
    } else if (x > y) {
      setAnswer('Mam wyższą wartość.');
    } else {
      setAnswer('Brawooo zgadłeś.');
    }
  }

  function resetGame() {
    setRandomNumber(0);
    setUserNumber(0);
  }

  return (
    <div className="moreOrLess">
      <h1>Jaką jestem liczbą? Zgadnij mnie :D</h1>
      <button className="btn" onClick={randomize}>
        START
      </button>
      <div className="numberInput">
        <input
          className="inputA"
          type="number"
          onChange={userChoice}
          placeholder="A"
        />
        <button className="btn blackbtn" onClick={resetGame}>
          RESET
        </button>
      </div>
      <h2>Odpowiedz: {answer}</h2>
    </div>
  );
};
