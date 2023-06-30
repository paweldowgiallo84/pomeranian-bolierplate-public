import React from 'react';
import { SortImmute } from '../Sort/Sort';
import { ArgumentSum } from '../ArgumentSum/ArgumentSum';

import './style.css';

export function Block21() {
  return (
    <div>
      <p>
        <SortImmute />
      </p>
      <p>
        <ArgumentSum />
      </p>
    </div>
  );
}
