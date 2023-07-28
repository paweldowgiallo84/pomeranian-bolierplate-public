import React, { useEffect } from 'react';
import { useState } from 'react';
import './styles.css';

const Calculator = () => {
  const [currentOutput, setCurrentOutput] = useState('0');
  const [previousOutput, setPreviousOutput] = useState('0');
  const [operatorSymbol, setOperatorSymbol] = useState('');

  const reset = () => {
    setPreviousOutput('0');
    setCurrentOutput('0');
  };

  const addNumber = (value) => {
    if (currentOutput === '0') {
      setCurrentOutput(value);
    } else setCurrentOutput(currentOutput.concat('', value));
  };

  const deleteLastNumber = () => {
    setCurrentOutput(currentOutput.slice(0, -1));
  };

  useEffect(() => {
    if (currentOutput.length === 0) setCurrentOutput('0');
  }, [currentOutput]);

  const addDot = (value) => {
    !currentOutput.includes('.')
      ? setCurrentOutput(currentOutput.concat('', value))
      : setCurrentOutput(currentOutput);
  };

  const addOperatorType = (operator) => {
    if (!previousOutput || previousOutput === '0') {
      setPreviousOutput(currentOutput.concat(' ', operator));
      setOperatorSymbol(operator);
      setCurrentOutput('0');
    }
    if (
      previousOutput &&
      (previousOutput.includes('/') ||
        previousOutput.includes('*') ||
        previousOutput.includes('+') ||
        previousOutput.includes('-')) &&
      currentOutput === '0'
    ) {
      setPreviousOutput(previousOutput.slice(0, -2).concat(' ', operator));
      setOperatorSymbol(operator);
      setCurrentOutput('0');
    } else if (
      previousOutput ||
      previousOutput.includes('/' || '*' || '+' || '-')
    ) {
      return;
    }
  };

  console.log(operatorSymbol);

  const resultEqual = () => {
    let previousOutputValue = previousOutput.slice(0, -2);
    switch (operatorSymbol) {
      case '/': {
        setCurrentOutput(Number(previousOutputValue) / Number(currentOutput));
        break;
      }
      case '*': {
        setCurrentOutput(Number(previousOutputValue) * Number(currentOutput));
        break;
      }
      case '+': {
        setCurrentOutput(Number(previousOutputValue) + Number(currentOutput));
        break;
      }
      case '-': {
        setCurrentOutput(Number(previousOutputValue) - Number(currentOutput));
        break;
      }
      default:
        return;
    }
  };

  //

  return (
    <div className="container--calculator">
      <div className="calculator--body">
        <div className="calculator--output">
          <div className="output--previous">{previousOutput}</div>
          <div className="output--current">{currentOutput}</div>
        </div>
        <button className="extend--ac" onClick={reset}>
          AC
        </button>
        <button onClick={deleteLastNumber}>DEL</button>
        <button onClick={() => addOperatorType('/')}>/</button>
        <button onClick={() => addNumber('1')}>1</button>
        <button onClick={() => addNumber('2')}>2</button>
        <button onClick={() => addNumber('3')}>3</button>
        <button onClick={() => addOperatorType('*')}>*</button>
        <button onClick={() => addNumber('4')}>4</button>
        <button onClick={() => addNumber('5')}>5</button>
        <button onClick={() => addNumber('6')}>6</button>
        <button onClick={() => addOperatorType('+')}>+</button>
        <button onClick={() => addNumber('7')}>7</button>
        <button onClick={() => addNumber('8')}>8</button>
        <button onClick={() => addNumber('9')}>9</button>
        <button onClick={() => addOperatorType('-')}>-</button>
        <button onClick={() => addDot('.')}>.</button>
        <button onClick={() => addNumber('0')}>0</button>
        <button className="extend--equal" onClick={resultEqual}>
          =
        </button>
      </div>
    </div>
  );
};

export default Calculator;
