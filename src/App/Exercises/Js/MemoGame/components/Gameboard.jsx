import React from 'react';

const Gameboard = ({ shuffleChars, inspectChar, classOfElemen }) => {
  return (
    <div>
      <div className="memo_board">
        {shuffleChars.map((card) => (
          <span onClick={() => inspectChar(card)}>
            <span className={classOfElemen(card)}>
              {(card.isVisible || card.isGuessed) && card.character}
            </span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default Gameboard;
