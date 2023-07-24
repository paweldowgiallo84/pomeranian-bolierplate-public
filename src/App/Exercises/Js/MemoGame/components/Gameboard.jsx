import React from 'react';

const Gameboard = ({ shuffleChars, inspectChar, classOfElemen }) => {
  return (
    <div>
      <div className="memo_board">
        {shuffleChars.map((card) => (
          <span onClick={() => inspectChar(card)} key={card.id}>
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

// function inspectChar(card) {
//   pickFirst ? setPickSeccond(card)  : setPickFirst(card);
// }

// useEffect(() => {
//   if (pickFirst && pickSeccond) {
//     if (pickFirst.character === pickSeccond.character) {
//       console.log('Got match!');
//       pickFirst.isGuessed = true;
//       pickSeccond.isGuessed = true;
//       nextTurn();
//     } else {
//       console.log('Characters dont match!');
//       nextTurn();
//     }
//   }
// }, [pickFirst, pickSeccond]);

// function nextTurn() {
//   setPickFirst(null);
//   setPickSeccond(null);
//   setSteps((prevSteps) => prevSteps + 1);
// }
