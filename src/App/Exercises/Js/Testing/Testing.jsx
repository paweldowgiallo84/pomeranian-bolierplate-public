import { useState } from 'react';
import './styles.css';
import { ToDoList } from './Todolist';

export function sum(a, b) {
  return a + b;
}

export const handleClick = (isVisible, setIsVisible) => {
  // console.log('dwa');
  setIsVisible(!isVisible);
};

export function Testing() {
  const [isVisible, setIsVisible] = useState(false);

  // console.log('jeden');

  // console.log('trzy');

  return (
    <div>
      <h1>Testing Jest!</h1>
      <div>{sum(2, 3)}</div>
      <button onClick={() => handleClick(isVisible, setIsVisible)}>
        Kliknij
      </button>
      <p>
        Visible or Not?{' '}
        {isVisible ? <span>Yes is is!</span> : <span>No is not!</span>}
      </p>
      <ToDoList />
    </div>
  );
}
