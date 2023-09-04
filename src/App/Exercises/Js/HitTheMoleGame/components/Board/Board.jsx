import React from 'react';
import moleImg from '../../images/mole.png';

import '../styles.css';
import './Board.css';

const GameBoard = ({ moleArray, hitTheMole }) => {
  return (
    <div>
      <div className="board">
        {moleArray.map((mole, index) => (
          <span className="moleHole">
            {mole.isVisible ? (
              <img
                className="moleImae"
                onClick={() => hitTheMole(index)}
                src={moleImg}
                alt="mole"
              />
            ) : null}
          </span>
        ))}
      </div>
    </div>
  );
};

export default GameBoard;
