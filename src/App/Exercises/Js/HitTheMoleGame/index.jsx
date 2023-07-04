import React from 'react';

export function HitTheMoleGame() {
  const moleArray = [1, 2, 3, 4, 5];
  return (
    <div>
      {moleArray.map((mole) => {
        return <span>mole {mole} | </span>;
      })}
    </div>
  );
}
