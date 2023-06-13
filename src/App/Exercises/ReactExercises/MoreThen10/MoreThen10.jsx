import { useState } from 'react';
import './styles.css';

export const MoreThen10 = () => {
  const [message, setMessage] = useState('');

  function answerHandler(ev) {
    let currentAnswer = ev.target.value;

    if (currentAnswer > 10) {
      setMessage('TAK');
    } else {
      setMessage('NIE');
    }
  }

  return (
    <div className="moreThen10">
      <h1>Czy A jest większe od 10?</h1>
      <div className="numberInput">
        <input type="Number" onChange={answerHandler} placeholder="A" />
      </div>
      <h2>Odpowiedz: {message}</h2>
    </div>
  );
};
