import React, { useState } from 'react';
import check from '../images/check.png';
import fomatDate from '../../../../helpers/fomatDate';
import './ToDoItem.css';
import { BinIcon } from '../images/BinIcon/BinIcon';
import axios from 'axios';
import { BASE_API_URL } from '../ToDoWithServer';

const ToDoItem = ({ todoList, handleFetchTodoData }) => {
  const [isRemoveError, setIsRemoveError] = useState(false);
  const { isDone, id, title, author, createdAt, note, doneDate } = todoList;
  // const handleClickRefresh = () => window.location.reload();

  const handleDeleteListItem = () => {
    axios
      .delete(BASE_API_URL + '/todo/' + id)
      .then((response) => {
        handleFetchTodoData();
      })
      .catch((error) => {
        setIsRemoveError(true);
      });
  };

  return (
    <>
      <div className={`todo__post post_bakground${isDone ? `--isDone` : null}`}>
        <div className="todo__post__content">
          <span className="todo__title">{title}</span>
          <span className="todo__text todo__text--smaller">{author}</span>
          <span className="todo__text todo__text--smaller">
            {fomatDate(createdAt)}
          </span>
          <div className="todo__note todo__text">{note}</div>
        </div>
        <div className="todo__post__status">
          <span className="todo__post--delete"></span>
          <button className="todo__bin" onClick={handleDeleteListItem}>
            <BinIcon />
          </button>
          {isRemoveError && (
            <div className="todo__remove-error">nie udało się usunąć</div>
          )}
          <span className="todo__is-done">
            {isDone && <img src={check} alt="check" />}
          </span>
          <span className="todo__is-done--data">
            {isDone && fomatDate(doneDate)}
          </span>
        </div>
      </div>
    </>
  );
};

export default ToDoItem;

// (
//   <div className="todo__empty-list">
//     <span className="todo__empty-list__info">
//       Brawo! Nie masz aktualnie żadnych zadań do zrealizowania
//     </span>
//     <button
//       onClick={handleClickRefresh}
//       className="todo__btn--refresh-list"
//     >
//       ODŚWIEŻ WIDOK
//     </button>
//   </div>
//   )
