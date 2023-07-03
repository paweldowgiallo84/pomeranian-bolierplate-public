import React from 'react';
import { SortImmute } from '../Sort/Sort';
import { ArgumentSum } from '../ArgumentSum/ArgumentSum';
import { AverageGrade } from '../AverageGrade/AveraeGrade';

import { Fibo } from '../Fibonacci/Fibonacci';
import { SimpleCalculation } from '../SimpleCalculation/SimpleCalculation';

import './style.css';

export function Block21() {
  return (
    <div>
      <p>
        <SortImmute />
      </p>
      <hr />
      <p>
        <ArgumentSum />
      </p>
      <hr />
      <p>
        <AverageGrade />
      </p>
      <hr />
      <p>
        <SimpleCalculation />
      </p>
      <hr />
      <p>
        <Fibo />
      </p>
    </div>
  );
}
