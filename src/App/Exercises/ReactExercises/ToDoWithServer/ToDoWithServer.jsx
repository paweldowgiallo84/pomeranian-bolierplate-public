import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './style.css';
import ToDoItem from './components/ToDoItem';
import Title from './components/Title';
import ErrorPage from './components/ErrorPage';
import TodoForm from './components/TodoForm';

export const BASE_API_URL = 'http://localhost:3333/api';

const ToDoWithServer = () => {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState('');
  const [isAddPageShown, setIsAddPageShow] = useState(false);

  const handleFetchTodoData = async () => {
    const timeoutDuration = 5000;

    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}/todo`);
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Timeout')), timeoutDuration);
      });
      const response = await Promise.race([fetchDataPromise, timeoutPromise]);

      if (!response) {
        setError('Przekroczono czas oczekiwania na odpowiedź serwera');
      }
      setError('');
      setTodoList(response.data);
    } catch (error) {
      setError(
        'Wystpił błąd podczas komunikacji z serwerem: ' + error?.message
      );
    }
  };

  useEffect(() => {
    handleFetchTodoData();
  }, []);

  return (
    <div className="todo__container">
      <Title />
      {isAddPageShown && <TodoForm setIsAddPageShow={setIsAddPageShow} />}
      {!isAddPageShown &&
        (error ? (
          <ErrorPage error={error} />
        ) : (
          todoList.length > 0 &&
          todoList.map((todoList) => {
            return (
              <ToDoItem
                todoList={todoList}
                key={todoList.id}
                handleFetchTodoData={handleFetchTodoData}
              />
            );
          })
        ))}
      <div>
        {!isAddPageShown && (
          <button className="todo__btn" onClick={() => setIsAddPageShow(true)}>
            DODAJ
          </button>
        )}
      </div>
    </div>
  );
};

export default ToDoWithServer;
