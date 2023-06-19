// import { useEffect, useState } from 'react';
import './styles.css';

export const Calculator = () => {
  //   const [answer, setAnswer] = useState('');
  //   const [randomNumber, setRandomNumber] = useState(0);
  //   const [userNumber, setUserNumber] = useState(0);

  // useEffect(() => {
  //   guesNumber(Number(randomNumber), Number(userNumber));
  // }, [randomNumber, userNumber]);

  // function randomize(ev) {
  //   setRandomNumber(Math.floor(Math.random() * 21 + 1));
  // }

  // function userChoice(ev) {
  //   setUserNumber(ev.target.value);
  // }
  // console.log(randomNumber);
  // console.log(userNumber);

  // function guesNumber(x, y) {
  //   if (x === 0) {
  //     setAnswer('Naciśnij START aby zacząć');
  //   } else if (y === 0) {
  //     setAnswer('Zgadnij Liczbę');
  //   } else if (x < y) {
  //     setAnswer('Mam niższą wartość.');
  //   } else if (x > y) {
  //     setAnswer('Mam wyższą wartość.');
  //   } else {
  //     setAnswer('Brawooo zgadłeś.');
  //   }
  // }

  // function resetGame() {
  //   setRandomNumber(0);
  //   setUserNumber(0);
  // }

  return (
    <div className="calculator">
      <div className="calculator-body">
        <img src="./images/calc-ref.png" alt="" />
        <div className="calculator-display"></div>
        <div className="calculator-buttons">
          <div className="calculator-buttons-memory"></div>
          <div className="calculator-buttons-numbers"></div>
          <div className="calculator-buttons-operators"></div>
        </div>
      </div>
    </div>
  );
};
