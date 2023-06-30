import './styles.css';

const sumOfParam = (...args) => {
  let sum = 0;
  for (const argument of args) {
    if (typeof argument === 'string') return 'Złe wejście';
    else sum += argument;
  }
  return sum;
};

console.log(sumOfParam(1, 2, 3, 4, 5, 6, 7, 8, 9));
console.log(sumOfParam(1, 2, 3, 4, 5, 6, 7, 'hello', 8, 9));

export const ArgumentSum = () => {
  return <div className="click5"></div>;
};

//---------------------------------------------

/*
stwórz funkcję, która przyjmuje dowolną liczbę argumentów za pomocą "...args" i zwraca ich sumę
sumOfParam(1,2,3,4,5,6) -> x
sumOfParam(1,2,3, 'not a number',5,6) -> "złe wejście"
*/
