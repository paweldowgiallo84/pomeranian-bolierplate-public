import React from 'react';
import './Settings.css';

const Settings = ({ boardSize, setBoardSize }) => {
  const gameElementSelector = [
    { label: '8 elementów', sizeValue: 8, id: 0 },
    { label: '16 elementów', sizeValue: 16, id: 1 },
    { label: '20 elementów', sizeValue: 20, id: 2 },
  ];

  return (
    <div className="memo_option">
      <div className="memo_option_setting">
        <div className="description">
          <span>LICZBA ELEMENTÓW</span>
        </div>
        <div className="btns">
          {gameElementSelector.map(({ label, sizeValue, id }) => (
            <button
              key={id}
              className={
                boardSize === sizeValue ? 'activ_memo_btn' : 'memo_btn'
              }
              onClick={() => setBoardSize(sizeValue)}
            >
              {label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Settings;
