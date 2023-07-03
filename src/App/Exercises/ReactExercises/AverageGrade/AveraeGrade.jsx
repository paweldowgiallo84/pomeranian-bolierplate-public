export const AverageGrade = () => {
  const primaryArray = [
    { id: 0, name: 'Eve', grades: [4, 2, 4, 6, 1, 2, 3] },
    { id: 2, name: 'Eve2', grades: [4, 2, 4, 6, 1, 2, 3] },
  ];

  const averageGradeArray = primaryArray.map(({ id, name, grades: avr }) => ({
    id,
    name,
    avr,
  }));

  const calcAvr = (primaryArray) => {
    for (let n = 0; n < averageGradeArray.length; n++) {
      let sum = averageGradeArray[n].avr.reduce(
        (acu, curentValue) => acu + curentValue,
        0
      );
      averageGradeArray[n].avr = (
        sum / averageGradeArray[n].avr.length
      ).toFixed(2);
      averageGradeArray[n].id = n;
    }
  };
  calcAvr(primaryArray);

  console.log({
    primaryArray, // ma pozostać nie zmieniona
    averageGradeArray,
  });

  return (
    <>
      <div className="averageGrade"></div>
      <p>
        3. napisz funkcję która jako parametr przyjmuje tablicę obiektów
        natomiast zwraca tablicę z wyliczoną wartością średnią zamiast ocen
      </p>
    </>
  );
};

//---------------------------------------------------------------------------------------------------------------------------------------------

/*
3. napisz funkcję która jako parametr przyjmuje tablicę obiektów natomiast zwraca tablicę z wyliczoną
wartością średnią zamiast ocen
funkcja ma nie zmieniać pierwotnej tablicy

const tablicaPierwotna = [
 {id: 0, name: "Eve", grades: [4, 2, 4, 6, 1, 2, 3]},
 {id: 2, name: "Eve2", grades: [4, 2, 4, 6, 1, 2, 3]},
]

const tablicaWynikowa = calcAvr(tablicaPierwotna);

console.log({
 tablicaPierwotna, // ma pozostać nie zmieniona
 tablicaWynikowa
})

// tablicaWynikowa -> [
 // {id: 0, name: "Eve", avr: 3.14},
 // {id: 1, name: "Eve2", avr: 3.14},
// ]
*/

// -------------------------------------------------------------------------------------------------------------

/*
4. napisz funkcję która jako parametr przyjmuje obiekt przechodzi po wszystkich jego polach i kapitalizuje
im pierwszą literę
funkcja nie zmienia oryginalnego obiektu
const originalObj = {name: 'john', surname: 'wick', age: 1000};
const changedObject = upperObject(originalObj)
console.log({
 originalObj, // {name: 'john', surname: 'wick', age: 1000}
 changedObject // {name: 'John', surname: 'Wick', age: 1000}
})


5. napisać rekurencyjnie
fibonacci(3) -> 2
fibonnaci(12) -> 144

*/
