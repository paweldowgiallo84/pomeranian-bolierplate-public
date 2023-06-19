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
      <div className="calculator-body calc-btn">
        <img src="./images/calc-ref.png" alt="" />
        <div className="calculator-display">TU BEDZIE EKRAN</div>

        <div className="calculator-buttons-memory btn-color-light-gray">
          <div className="calculator-small-button memory-btn-01">MRC</div>
          <div className="calculator-small-button memory-btn-02">M-</div>
          <div className="calculator-small-button memory-btn-03">M+</div>
          {/* TU BEDA PRZYCISKI MEMORY */}
        </div>
        <div className="calculator-buttons-numbers">
          <div className="calculator-small-button number-btn-01"></div>
          <div className="calculator-small-button number-btn-02"></div>
          <div className="calculator-small-button number-btn-03"></div>
          <div className="calculator-small-button number-btn-04"></div>
          <div className="calculator-small-button number-btn-05"></div>
          <div className="calculator-small-button number-btn-06"></div>
          <div className="calculator-small-button number-btn-07"></div>
          <div className="calculator-small-button number-btn-08"></div>
          <div className="calculator-small-button number-btn-09"></div>
          <div className="calculator-small-button number-btn-10"></div>
          <div className="calculator-small-button number-btn-11"></div>
          <div className="calculator-small-button number-btn-12"></div>
          {/* TU BEDA KLAWISZE Z NUMERAMI */}
        </div>
        <div className="calculator-buttons-operators">
          TU BEDA KLAWISZE OPERACJI
        </div>
      </div>
    </div>
  );
};
