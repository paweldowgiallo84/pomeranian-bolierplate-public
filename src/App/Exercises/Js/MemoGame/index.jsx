import React from 'react';
import TitleAndDescription from './components/TitleAndDescription/TitleAndDescription';
import { Memo } from './components/Memo';

import './styles.css';

export const MemoGame = () => {
  return (
    <>
      <div>
        <div>
          <TitleAndDescription />
        </div>
        <Memo />
      </div>
    </>
  );
};
