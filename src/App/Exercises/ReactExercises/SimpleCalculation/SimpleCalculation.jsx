const calculateWithChar = (operator, valueA, valueB) => {
  let add = valueA + valueB;
  let substract = valueA - valueB;
  let multiply = valueA * valueB;
  let divide = valueA / valueB;

  if (operator === '+' || '-' || '*' || '/') {
    if (typeof valueA !== 'number' || typeof valueB !== 'number')
      return console.log('złe wejście');
    else if (operator === '+') return add;
    else if (operator === '-') return substract;
    else if (operator === '*') return multiply;
    else if (operator === '/') return divide;
    else return console.log('zły znak');
  }
};

console.log(
  calculateWithChar('+', 1, 2),
  calculateWithChar('*', 1, 2),
  calculateWithChar('/', 1, 2),
  calculateWithChar('---', 1, 2),
  calculateWithChar('+', 'abc', 2)
);

export const SimpleCalculation = () => {
  return (
    <>
      <div className="calcWithChar"></div>
      <p>
        6. stwórz funkcję calculateWithChar, która przyjmuje jako argument jeden
        operator matematyczne '+', '-', '*', '/'
      </p>
    </>
  );
};

// -------------------------------------------------------------------------------------------------------------

/*

6. stwórz funkcję calculateWithChar, która przyjmuje jako argument jeden operator matematyczne
'+', '-', '*', '/'
funkcja calculateWithChar ma zwracać funkcję, która przyjmuje dwie liczby jako argumenty
calculateWithChar('+')(1,2) -> 3
calculateWithChar('*')(1,2) -> 2
calculateWithChar('/')(1,2) -> 0.5
calculateWithChar('---')(1,2) -> 'zły znak'
calculateWithChar('+')('abc',2) -> 'złe wejscie'

*/
