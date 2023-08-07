import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import './style.css';
import ToDoItem from './components/ToDoItem/ToDoItem';
import Title from './components/Title/Title';
import TodoForm from './components/TodoForm/TodoForm';
import ErrorPage from './components/ErrorPage/ErrorPage';
import EmptyList from './components/EmptyList/EmptyList';

export const BASE_API_URL = 'http://localhost:3333/api';
const TIMEOUT_DURRATION = 5000;

const ToDoWithServer = () => {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState('');
  const [isFormVisible, setFormVisible] = useState(false);

  const [idForEdit, setIdForEdit] = useState(null);

  const handleFetchTodoData = async (givenID = undefined) => {
    const isGetSpecifcMode = Boolean(givenID);

    const urlSuffix = isGetSpecifcMode ? `/${givenID}` : '';

    try {
      const fetchDataPromise = axios.get(`${BASE_API_URL}/todo${urlSuffix}`);
      const timeoutPromise = new Promise((_, reject) => {
        setTimeout(
          () => reject(new Error('Response timeout')),
          TIMEOUT_DURRATION
        );
      });
      const response = await Promise.race([fetchDataPromise, timeoutPromise]);

      if (!response) {
        setError('Timed out waiting for a response from the server');
      }
      setError('');

      if (isGetSpecifcMode) {
        const updatedTodo = response.data;

        setTodoList(
          todoList.map((todo) => {
            if (todo.id === updatedTodo.id) {
              return updatedTodo;
            }
            return todo;
          })
        );
      } else {
        setTodoList(response.data);
      }
    } catch (error) {
      setError(
        'An error occurred while communicating with the server: ' +
          error?.message
      );
    }
  };

  useEffect(() => {
    handleFetchTodoData();
  }, []);

  return (
    <div className="todo__container">
      <Title />
      {isFormVisible && (
        <TodoForm
          setFormVisible={setFormVisible}
          handleFetchTodoData={handleFetchTodoData}
          data={todoList.find((todo) => todo.id === idForEdit)}
          setIdForEdit={setIdForEdit}
        />
      )}
      {!isFormVisible &&
        !todoList.length <= 0 &&
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
                setIdForEdit={setIdForEdit}
                setFormVisible={setFormVisible}
              />
            );
          })
        ))}
      {todoList <= 0 && !isFormVisible && <EmptyList />}
      <div className="todo__button_addItem">
        {!isFormVisible && (
          <button className="todo__btn" onClick={() => setFormVisible(true)}>
            ADD
          </button>
        )}
      </div>
    </div>
  );
};

export default ToDoWithServer;
