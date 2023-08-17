import React from 'react';

const Card = ({ card, classOfElement, inspectChar, cardIsSelected }) => {
  const handleClick = () => {
    if (!cardIsSelected) {
      inspectChar(card);
    }
  };
  return (
    <span onClick={handleClick}>
      <span className={classOfElement(card)}>
        {(card.isVisible || card.isGuessed) && card.character}
      </span>
    </span>
  );
};

export default Card;
