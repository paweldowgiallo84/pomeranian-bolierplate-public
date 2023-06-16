import { useState } from 'react';
import './styles.css';

export const MoreOrLess = () => {
  const [answer, setAnswer] = useState('');
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);

  function numberA(ev) {
    let A = ev.target.value;
    setValueA(A);
    comperAB(A, valueB);
    console.log('A = '.concat(A));
    console.log('valB = '.concat(valueB));
  }

  function numberB(ev) {
    let B = ev.target.value;
    setValueB(B);
    comperAB(valueA, B);
    console.log('B = '.concat(B));
    console.log('valA = '.concat(valueA));
  }

  // COŚ W FUNKCJI comperAB   NIE PASI??

  function comperAB(x, y) {
    if (x > y) {
      setAnswer('A jest większe od B');
    } else if (x < y) {
      setAnswer('A jest mniejsze od B');
    } else {
      setAnswer('A i B są takie same');
    }

    console.log('');
    console.log(x, y);
  }

  return (
    <div className="moreOrLess">
      <h1>Czy A jest większe od B?</h1>
      <div className="numberInput">
        <input
          className="inputA"
          type="Number"
          onChange={numberA}
          placeholder="A"
        />
        <input
          className="inputB"
          type="Number"
          onChange={numberB}
          placeholder="B"
        />
      </div>
      <h2>Odpowiedz: {answer}</h2>
    </div>
  );
};
