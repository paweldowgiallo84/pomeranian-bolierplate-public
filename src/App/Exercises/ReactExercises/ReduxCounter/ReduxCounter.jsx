import React from 'react';
import { First } from './First';
import { ReduxStealer } from './ReduxStealer';
import './styles.css';

const ReduxCounter = () => {
  return (
    <div>
      <h1>ReduxCounter</h1>
      <div className="redux-container">
        <First />
        <ReduxStealer />
      </div>
    </div>
  );
};

export default ReduxCounter;
