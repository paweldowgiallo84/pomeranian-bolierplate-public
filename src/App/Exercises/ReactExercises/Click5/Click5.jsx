import { useState } from 'react';
import './styles.css';

export const Click5 = () => {
  const [click, setClick] = useState(0);
  const [message, setMessage] = useState();

  function clickHandler() {
    let currentClick = click;
    setClick(currentClick + 1);

    if (currentClick + 1 >= 5) {
      setMessage('Gratulacje kliknąłeś 5 razy');
    } else {
      setMessage(`Kliknąłes ${currentClick + 1} razy`);
    }
  }

  return (
    <div className="click5">
      <h1>Kliknij 5</h1>
      <button className="btn" onClick={clickHandler}>
        {'START'}
      </button>
      <h2>{message}</h2>
    </div>
  );
};
