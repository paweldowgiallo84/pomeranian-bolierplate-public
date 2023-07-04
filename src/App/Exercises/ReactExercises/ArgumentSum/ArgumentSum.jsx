import './styles.css';

const sumOfParam = (...args) => {
  let sumOfArguments = 0;
  for (const argument of args) {
    if (typeof argument === 'string') return 'Złe wejście';
    else sumOfArguments += argument;
  }
  return sumOfArguments;
};

// console.log(sumOfParam(1, 2, 3, 4, 5, 6, 7, 8, 9));
// console.log(sumOfParam(1, 2, 3, 4, 5, 6, 7, 'hello', 8, 9));

export const ArgumentSum = () => {
  return (
    <>
      <div className="averageSum"></div>
      <p>
        2. stwórz funkcję, która przyjmuje dowolną liczbę argumentów za pomocą
        "...args" i zwraca ich sumę
      </p>
    </>
  );
};

//---------------------------------------------

/*
2. stwórz funkcję, która przyjmuje dowolną liczbę argumentów za pomocą "...args" i zwraca ich sumę
sumOfParam(1,2,3,4,5,6) -> x
sumOfParam(1,2,3, 'not a number',5,6) -> "złe wejście"
*/

// -----------------------------------------------

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
