import React from 'react';

const Exercise = () => {
  // const data = new Array();
  // const uniqueData = new Set();

  // data.push('Lukas');
  // data.push('John');
  // data.push('John');

  // const evenMoreUniqueData = new Set(data);

  // uniqueData.add('Lukas:');
  // uniqueData.add('John');
  // uniqueData.add('John');

  // console.log({ data, uniqueData, evenMoreUniqueData });

  // ------------ Create copy of data: -------------------------------------------------------

  // let data2 = data.slice();

  // let data2 = data.map((e) => e);

  // let data2 = data.concat();

  // let data2 = Array.from(data);

  // let data2 = JSON.stringify(data);
  // data2 = JSON.parse(data2);

  // data2.push('Adam');

  // console.log({ data, data2 });

  //---------- Wypisywanie zawartosci tablicy ------------------------------------------------

  // for (let item of data) {

  // ----------------- array.reduce -----------------------------------------------------------

  // const array1 = [{ name: 'Lukas' }, { name: 'Adam' }];

  // const sumWithInitial = array1.reduce(
  //   (accumulator, currentValue) => [...accumulator, currentValue.name],
  //   []
  // );

  // console.log(sumWithInitial);

  const team = [
    { userID: 25143, userName: 'Player1', userScore: 5 },
    { userID: 25145, userName: 'Player2', userScore: 1 },
    { userID: 25155, userName: 'Player3', userScore: 4 },
    { userID: 25485, userName: 'Player4', userScore: 99 },
    { userID: 25155, userName: 'Player5', userScore: 3 },
    { userID: 25155, userName: 'Player6', userScore: 7 },
  ];

  const MAX_SCORE = 10;

  const removeDuplicateID = (arr) =>
    arr.filter((user, i, arr) => {
      if (
        arr.map((el) => el.userId).filter((id) => id === user.userId).length ===
        1
      )
        return user;
      return null;
    });

  const removeCheater = (arr) => {
    return arr.filter((user) =>
      user.userScore <= MAX_SCORE ? user : undefined
    );
  };

  const userScoreSum = removeDuplicateID(removeCheater(team)).reduce(
    (accumulator, currentValue) => accumulator + currentValue.userScore,
    0
  );

  console.log(userScoreSum);

  return (
    <>
      <div>Your team scored {userScoreSum} points.</div>
    </>
  );
};

export default Exercise;
