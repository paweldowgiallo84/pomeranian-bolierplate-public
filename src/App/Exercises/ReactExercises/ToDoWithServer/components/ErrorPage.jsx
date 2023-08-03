import React from 'react';
import './ErrorPage.css';

const ErrorPage = ({ error }) => {
  const handleClickRefresh = () => window.location.reload();

  return (
    <>
      <div className="todo__error">
        <span className="todo__error__info">
          Przepraszamy. Nie udało się pobrać listy zadań. {error}
        </span>
        <button
          onClick={handleClickRefresh}
          className="todo__btn--refresh-list"
        >
          ODŚWIEŻ WIDOK
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
