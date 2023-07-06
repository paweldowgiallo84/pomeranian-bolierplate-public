import React from 'react';
import moleImg from './images/mole.png';

import './styles.css';

const GameBoard = ({ moleArray, hitTheMole, scoreCount }) => {
  return (
    <div>
      <p>WYNIK: {scoreCount}</p>
      {moleArray.map((mole, index) => (
        <span>
          {mole.isVisible ? (
            <img onClick={() => hitTheMole(index)} src={moleImg} alt="mole" />
          ) : null}
        </span>
      ))}
    </div>
  );
};

export default GameBoard;
