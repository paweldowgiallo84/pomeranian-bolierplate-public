import React from 'react';
import './ErrorPage.css';

const ErrorPage = ({ error }) => {
  const handleClickRefresh = () => window.location.reload();

  return (
    <>
      <div className="todo__error">
        <span className="todo__error__info">
          We apologize. Failed to fetch task list: {error}
        </span>
        <button
          onClick={handleClickRefresh}
          className="todo__btn--refresh-list"
        >
          REFRESH THE VIEW
        </button>
      </div>
    </>
  );
};

export default ErrorPage;
