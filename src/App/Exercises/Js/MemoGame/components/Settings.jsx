import React from 'react';

const Settings = ({ boardSize, setBoardSize }) => {
  const gameElementSelector = [
    { label: '8 elementów', sizeValue: 8 },
    { label: '16 elementów', sizeValue: 16 },
    { label: '20 elementów', sizeValue: 20 },
  ];

  return (
    <div>
      <div className="memo_game_main">
        <div className="memo_option">
          <div className="description">
            <span>LICZBA ELEMENTÓW</span>
          </div>
          <div className="btns">
            {gameElementSelector.map(({ label, sizeValue }) => (
              <button
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
    </div>
  );
};

export default Settings;
