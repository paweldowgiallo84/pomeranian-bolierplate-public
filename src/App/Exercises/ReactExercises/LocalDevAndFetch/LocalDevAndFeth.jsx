import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import './style.css';

const BASE_API_URL = 'http://localhost:3333/';

const LocalDevAndFetch = () => {
  const [getTodo, setTodo] = useState([]);
  const [getError, setError] = useState('');
  const [getNewTodo, setNewTodo] = useState('');

  const handleFetchTodoData = async () => {
    const timeoutDuration = 5000;

    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}api/todo`);
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout')), timeoutDuration);
      });
      const response = await Promise.race([fetchDataPromise, timeoutPromise]);

      if (!response) {
        setError('Przekroczono czas oczekiwania na odpowiedź serwera');
      }
      setError('');
      setTodo(response.data);
    } catch (error) {
      setError('Wystpił błąd podczas komunikacji z serwerem ' + error?.message);
    }
  };

  return (
    <div>
      <button onClick={handleFetchTodoData}>pobierz todo</button>
      {getError && <p>{getError}</p>}
      {getTodo.length > 0 && (
        <ul>
          {getTodo.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LocalDevAndFetch;
