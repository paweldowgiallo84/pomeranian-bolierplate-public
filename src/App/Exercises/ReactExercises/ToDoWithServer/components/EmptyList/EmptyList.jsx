import React from 'react';
import './EmptyList.css'

const EmptyList = () => {
  const handleClickRefresh = () => window.location.reload();
  return (
    <>
      <div className="todo__empty-list">
        <span className="todo__empty-list__info">
          You currently have no tasks to complete
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

export default EmptyList;
