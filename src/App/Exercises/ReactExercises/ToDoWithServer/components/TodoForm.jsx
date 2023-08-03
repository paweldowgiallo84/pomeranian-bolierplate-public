import React, { useState } from 'react';
import './TodoForm.css';
import axios from 'axios';
import { BASE_API_URL } from '../ToDoWithServer';

const TodoForm = ({ setIsAddPageShow }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [note, setNote] = useState('');

  async function handleSendForm() {
    try {
      axios.post(BASE_API_URL + '/todo/', { title, author, note });
    } catch (error) {}
  }

  const isReadyToSend =
    title.length > 0 && author.length > 0 && note.length > 0;

  return (
    <div className="todo__form-container">
      <div className="todo__form">
        <span>Tytuł</span>
        <input
          type="text"
          placeholder="Kupić parasol na balkon"
          value={title}
          onChange={(event) => {
            setTitle(event.target.value);
          }}
        />
      </div>
      <div className="todo__form">
        <span>Autor</span>
        <input
          type="text"
          placeholder="Wojtek"
          value={author}
          onChange={(event) => {
            setAuthor(event.target.value);
          }}
        />
      </div>
      <div className="todo__form">
        <span>Treść</span>
        <textarea
          className="todo__form--note"
          type="text"
          placeholder="Zmierzyć ile mamy miejsca na balkonie od barierki do kanapy i ile musi mieć max średnicy - miarka!!"
          value={note}
          onChange={(event) => {
            setNote(event.target.value);
          }}
        />
      </div>
      <div className="todo__form-buttons">
        <button
          className="todo__btn form__btn"
          onClick={() => setIsAddPageShow(false)}
        >
          COFNIJ
        </button>

        <button
          className="todo__btn form__btn"
          onClick={handleSendForm}
          disabled={!isReadyToSend}
        >
          DODAJ
        </button>
      </div>
    </div>
  );
};

export default TodoForm;
