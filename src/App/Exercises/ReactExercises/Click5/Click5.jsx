import { useState } from 'react';
import './styles.css';

export const Click5 = () => {
  const [click, setClick] = useState(1);
  const [message, setMessage] = useState('Kliknąłeś 0 razy');

  function clickCounter() {
    setClick(click + 1);

    if (click >= 5) {
      setMessage(`Super! Kliknąłeś juz 5 razy... możesz przestać`);
    } else if (click === 1) {
      setMessage(`Kliknąłeś ${click} raz`);
    } else {
      setMessage(`Kliknąłeś ${click} razy`);
    }
  }

  function clickReset() {
    setClick(1);
    setMessage('Zresetowałeś licznik!');
  }
  // console.log(click);

  return (
    <div className="click5">
      <h1>Kliknij 5</h1>
      <div className="click5-content">
        <button className="btn" onClick={clickCounter}>
          {'START'}
        </button>

        <h2 className="click5-msg">{message}</h2>

        <button className="btn2" onClick={clickReset}>
          {'RESET'}
        </button>
      </div>
    </div>
  );
};
