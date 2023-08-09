import React from 'react';
import { TogleArrowIcon } from '../../../../../Components/Icons/ToggleArrowIcon';
import './Title.css';

const Title = () => {
  return (
    <>
      <div className="todo">
        <h1 className="title">
          <div className="toggle-arrow">
            <TogleArrowIcon />
          </div>
          TODO
        </h1>
      </div>
      <span className="title__description">
        Tutaj znajdziesz listę swoich zadań
      </span>
    </>
  );
};

export default Title;
