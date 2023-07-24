import React from 'react';

const Prototypes = () => {
  function Car(make, model) {
    //Definiowanie funkcji konstruktora Car
    this.make = make;
    this.model = model;
  }

  Object.prototype.getMake = function () {
    return this.make;
  };

  Object.prototype.getModel = function () {
    return this.model;
  };

  Array.prototype.newArrayMethod = function () {
    console.log('new global array method');
  };

  const exampleArray = [1, 2, 3];

  exampleArray.newArrayMethod();

  const myCar = new Car('Toyota', 'Camry');

  return (
    <div className="prototypes_container">
      Make: {myCar.getMake()} <br />
      Model: {myCar.getModel()}
    </div>
  );
};

export default Prototypes;

/*

Prototype Chain (łańcuch prototypów):

Prototypy są zorganizowane w łańcuch, który nazywany jest prototype chain. Kiedy odwołujemy się do danej właściwości lub metody obiektu, JavaScript najpierw sprawdza, czy dana właściwość/metoda istnieje w obiekcie. Jeśli nie, przeszukuje łańcuch prototypów, aby znaleźć właściwość/metodę w prototypach powiązanych obiektów, aż znajdzie szukaną właściwość/metodę lub dojdzie do końca łańcucha (prototypu Object.prototype).

const obj = {}; // Prototyp: Object.prototype
const arr = []; // Prototyp: Array.prototype
const func = function() {}; // Prototyp: Function.prototype
const num = 42; // Prymityw - nie ma prototypu
const str = 'Hello'; // Prymityw - nie ma prototypu
*/
