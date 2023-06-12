import React from 'react';

import './style.css';

export function ReactMockup01() {
  return (
    <div className="mockup-01">
      <h1>Cześć!</h1>
      <div>
        <label className="enter-text-lable" htmlFor="text">
          Wpisz tekst
        </label>
      </div>
      <div>
        <input
          className="text-input"
          type="text"
          id="enterText"
          name="text"
          placeholder="tekst do wpisania"
        />
      </div>
      <div>
        <input
          type="button"
          className="btnKliknij"
          id="SubmitButton"
          value="KLIKNIJ"
        />
      </div>
    </div>
  );
}
