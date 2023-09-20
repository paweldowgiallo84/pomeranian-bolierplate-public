import React from 'react';
import Card from '../Card/Card';
import './Gameboard.css';

const Gameboard = ({
  shuffleChars,
  inspectChar,
  classOfElement,
  cardIsSelected,
}) => {
  return (
    <div className="memo_board">
      {shuffleChars.map((card) => (
        <Card
          key={card.id}
          card={card}
          classOfElement={classOfElement}
          inspectChar={inspectChar}
          cardIsSelected={cardIsSelected}
        />
      ))}
    </div>
  );
};

export default Gameboard;
