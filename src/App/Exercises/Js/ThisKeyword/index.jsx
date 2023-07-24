import React from 'react';

const ThisKeyword = () => {
  // przyklad 1 wywolanie w kontekscie globalnym
  console.log(this); // this odnosi sie do globalnego obiektu (w przegladarce window w vanila JS)

  //---------------------end-------------------------

  //przyklad 2 wywolanie w komntekscie funkcji
  function thisContext() {
    return console.log(this);
  }
  thisContext();

  //----------------------end-----------------------

  // przyklad 3 wywolanie w kontekscie obiektu
  const person = {
    name: 'Pawel',
    sayHello() {
      console.log(this.name);
    },
    typicalJSFunction: function () {
      console.log(this.name);
    },
    arrowJSFunction: () => console.log(this?.name),
  };

  person.sayHello(); // zwroci nam wartosc propert "name"
  person.typicalJSFunction(); // zwroci nam wartosc propert "name"
  person.arrowJSFunction(); // zwroci nam wartosc propert "name" - undefined

  // bind
  const arrowJSFunctionThis = person.arrowJSFunction;
  const callArrowFunction = arrowJSFunctionThis.bind(person);
  callArrowFunction();

  //-----------------------end---------------------

  // przyklad 4 wywolanie w kontekscie klasy
  class Car {
    constructor(make) {
      this.make = make;
    }

    getMake() {
      console.log(this.make);
    }
  }

  const myCar = new Car('Opel');

  myCar.getMake();

  // Call() function example implementatio:
  const personeTwo = {
    name: 'Pawel',
    sayHello() {
      return `My name is: ${this.name}`;
    },
  };

  const personeThree = {
    name: 'Janusz',
  };

  console.log(personeTwo.sayHello.call(personeThree));

  // Apply()

  function introduce(age) {
    return `My name is ${this.name} an i'm ${age} years old`;
  }

  console.log(introduce.apply(personeThree, [25]));

  //-----------------------end---------------------

  return <div className="thiskeyword_container"></div>;
};

export default ThisKeyword;

/*

Zrozumienie bind(), call() i apply() oraz koncepcji this w języku JavaScript jest ważne, ponieważ pozwalają one na elastyczne manipulowanie kontekstem wywołania funkcji.


## Podsumowanie i Repozytorium linków: 
Jako podsumowanie warto wspomnieć że wiedza o tym czym i jak zmienia się `this` w różnych kontekstach wywołania oraz `prototypy` sa częstymi pytaniami rekrutacyjnymi i warto utrwalić sobie wiedzę na ten temat dosyć dobrze.

- [try, catch, finally]
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/try...catch)

- [prototypy i dziedziczenie]
https://kursjs.pl/kurs/obiekty/obiekty-dziedziczenie)

- [Poradnik do this - poczytać jako przypomnienie]
https://kursjs.pl/kurs/obiekty/obiekty-zaawansowane-this)
*/
