import { useEffect, useState } from 'react';
import './styles.css';

export const MoreOrLess = () => {
  const [answer, setAnswer] = useState('');
  const [valueA, setValueA] = useState(0);
  const [valueB, setValueB] = useState(0);
  useEffect(() => {
    compare(Number(valueA), Number(valueB));
  }, [valueA, valueB]);

  function numberA(ev) {
    setValueA(ev.target.value);

    // console.log('A = '.concat(A));
    // console.log('valB = '.concat(valueB));
  }

  function numberB(ev) {
    setValueB(ev.target.value);

    // console.log('B = '.concat(B));
    // console.log('valA = '.concat(valueA));
  }

  // COŚ W FUNKCJI comperAB   NIE PASI??

  function compare(x, y) {
    // console.log('');
    // console.log(x, y);
    if (x > y) {
      setAnswer('A jest większe od B');
    } else if (x < y) {
      setAnswer('A jest mniejsze od B');
    } else {
      setAnswer('A i B są takie same');
    }
  }

  // function compare(x, y) {
  //   console.log(x, y);
  //   console.log(typeof x, typeof y);
  //   if (x > y) {
  //     console.log('A jest większe od B');
  //   } else if (x < y) {
  //     console.log('A jest mniejsze od B');
  //   } else {
  //     console.log('A i B są takie same');
  //   }
  // }

  return (
    <div className="moreOrLess">
      <h1>Czy A jest większe od B?</h1>
      <div className="numberInput">
        <input
          className="inputA"
          type="number"
          onChange={numberA}
          placeholder="A"
        />
        <input
          className="inputB"
          type="number"
          onChange={numberB}
          placeholder="B"
        />
      </div>
      <h2>Odpowiedz: {answer}</h2>
    </div>
  );
};
