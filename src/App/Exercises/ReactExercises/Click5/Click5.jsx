import { useState } from 'react';
import './styles.css';

export const Click5 = () => {
  const [click, setClick] = useState(0);
  const [message, setMessage] = useState();

  function clickCounter() {
    let actualClick = click;
    setClick(actualClick + 1);

    if (actualClick + 1 >= 5) {
      setMessage(`Super! Kliknąłeś ${actualClick + 1} razy`);
    } else if (actualClick + 1 === 1) {
      setMessage(`Kliknałeś ${actualClick + 1} raz`);
    } else {
      setMessage(`Kliknąłeś ${actualClick + 1} razy`);
    }
  }

  return (
    <div className="click5">
      <h1>Kliknij 5</h1>
      <button className="btn" onClick={clickCounter}>
        {'START'}
      </button>

      <h2>{message}</h2>
    </div>
  );
};
