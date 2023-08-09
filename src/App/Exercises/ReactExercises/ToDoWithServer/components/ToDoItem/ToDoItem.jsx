import React, { useState } from 'react';
import fomatDate from '../../../../../helpers/fomatDate';
import './ToDoItem.css';
import { BinIcon } from '../../images/Icons/BinIcon';
import { EditIcon } from '../../images/Icons/EditIcon';
import { IsDoneIcon } from '../../images/Icons/IsDoneIcon';
import axios from 'axios';
import { BASE_API_URL } from '../../ToDoWithServer';

const ToDoItem = ({
  todoList,
  handleFetchTodoData,
  setIdForEdit,
  setFormVisible,
}) => {
  const [isRemoveError, setIsRemoveError] = useState(false);
  const { isDone, id, title, author, createdAt, note, doneDate } = todoList;

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

  const handleMarkListItem = () => {
    axios
      .put(BASE_API_URL + '/todo/' + id + '/markAsDone')
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
          <div className="todo__buttons">
            <button className="todo__icon" onClick={handleMarkListItem}>
              <IsDoneIcon />
            </button>
            <button
              className="todo__icon"
              onClick={() => {
                setIdForEdit(id);
                setFormVisible(true);
              }}
            >
              <EditIcon />
            </button>
            <button className="todo__icon" onClick={handleDeleteListItem}>
              <BinIcon />
            </button>
          </div>

          {isRemoveError && (
            <div className="todo__remove-error">failed to remove</div>
          )}
          <span className="todo__is-done">{isDone && <IsDoneIcon />}</span>
          <span className="todo__is-done--date">
            {isDone && fomatDate(doneDate)}
          </span>
        </div>
      </div>
    </>
  );
};

export default ToDoItem;
