import React, { useState } from 'react';

import './style.css';

export function ReactMockup01() {
  const [getCount, setCount] = useState(0);

  function handleIncrement() {
    setCount(getCount + 1);
  }

  function handleDecrement() {
    setCount(getCount - 1);
  }

  function handleClickButton() {
    return console.log('kliknales mnie!');
  }

  function handleOnClickChangeInput(event) {
    const inputValue = event.target.value;
    return console.log('Wprowadzona wartość:', inputValue);
  }

  return (
    <>
      <div className="mockup-01">
        <h1>Cześć!</h1>
        <div>
          <label className="enter-text-lable" htmlFor="text">
            Wpisz tekst
          </label>
        </div>
        <div>
          <input
            onChange={handleOnClickChangeInput}
            className="text-input"
            type="text"
            id="enterText"
            name="text"
            placeholder="tekst do wpisania"
          />
        </div>
        <div>
          <input
            onClick={handleClickButton}
            type="button"
            className="btnKliknij"
            id="SubmitButton"
            value="KLIKNIJ"
          />
        </div>
      </div>

      <div>
        <p>Liczik: {getCount}</p>
        <input
          type="button"
          onClick={handleIncrement}
          value={
            getCount === 0
              ? `Kliknieto we mnie ${getCount} razy`
              : `Super! kliknięto we mnie tyle razy -  ${getCount}`
          }
        />
        <input type="button" onClick={handleDecrement} value="Odejmij" />
      </div>
    </>
  );
}
