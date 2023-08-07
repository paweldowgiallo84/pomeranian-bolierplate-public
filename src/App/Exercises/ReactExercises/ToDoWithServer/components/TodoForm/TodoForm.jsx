import React, { useState } from 'react';
import './TodoForm.css';
import axios from 'axios';
import { BASE_API_URL } from '../../ToDoWithServer';

const TodoForm = ({
  setFormVisible,
  handleFetchTodoData,
  data,
  setIdForEdit,
}) => {
  const isEditMode = Boolean(data);

  const [title, setTitle] = useState(isEditMode ? data.title : '');
  const [author, setAuthor] = useState(isEditMode ? data.author : '');
  const [note, setNote] = useState(isEditMode ? data.note : '');

  const [prevTitle, setPrevTitle] = useState('');

  const [isError, setError] = useState(false);
  const [isSucces, setSucces] = useState(false);
  const [isInProgress, setInProress] = useState(false);

  async function handleSendForm() {
    try {
      setInProress(true);
      axios.post(BASE_API_URL + '/todo/', { title, author, note });
      setPrevTitle(title);

      setTitle('');
      setAuthor('');
      setNote('');

      setSucces(true);
    } catch (error) {
      setError(true);
    } finally {
      setInProress(false);
    }
  }

  async function handleEditForm() {
    try {
      setInProress(true);
      axios.put(BASE_API_URL + '/todo/' + data.id, { title, author, note });

      setSucces(true);
    } catch (error) {
      setError(true);
    } finally {
      setInProress(false);
    }
  }

  function resetSuccesMessage() {
    setSucces(false);
  }

  const isTitleToLong = title.length > 25;
  const isAuthorToLong = author.length > 20;
  const isNoteToLong = note.length > 100;

  const isFormValid = !isTitleToLong && !isAuthorToLong && !isNoteToLong;

  const isTitleInserted = title.length > 0;
  const isAuthorInserted = author.length > 0;
  const isNoteInserted = note.length > 0;

  const isFormInserted = isTitleInserted && isAuthorInserted && isNoteInserted;

  const isReadyToSend = isFormInserted && isFormValid;

  console.log('isEditMode: ', isEditMode);

  return (
    <div className="todo__form-container">
      <div className="todo__form">
        <span>Title</span>
        <input
          type="text"
          placeholder="Insert title"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
          onFocus={resetSuccesMessage}
        />
      </div>
      {!isEditMode && (
        <div className="todo__form">
          <span>Author</span>
          <input
            type="text"
            placeholder="Insert author"
            value={author}
            onChange={(event) => {
              setAuthor(event.target.value);
            }}
            onFocus={resetSuccesMessage}
          />
        </div>
      )}

      <div className="todo__form">
        <span>Note</span>
        <textarea
          className="todo__form--note"
          type="text"
          placeholder="Insert note description"
          value={note}
          onChange={(event) => {
            setNote(event.target.value);
          }}
          onFocus={resetSuccesMessage}
        />
      </div>
      <div>
        {isInProgress && (
          <span className="todo__inProgress">Adding in progress...</span>
        )}
      </div>
      <div>
        {isError && (
          <span className="todo__isError">A sending error occurred!</span>
        )}
      </div>
      <div>
        {isSucces && (
          <span className="todo__isSucces">
            Successfully added entry {prevTitle}
          </span>
        )}
      </div>
      <div className="todo__form-buttons">
        <button
          className="todo__btn form__btn"
          onClick={() => {
            setFormVisible(false);
            handleFetchTodoData(isEditMode ? data.id : undefined);
            setIdForEdit(null);
          }}
        >
          BACK
        </button>

        <button
          className="todo__btn form__btn"
          onClick={() => (isEditMode ? handleEditForm() : handleSendForm())}
          disabled={!isReadyToSend || isInProgress}
        >
          {isEditMode ? 'SAVE' : 'ADD'}
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
