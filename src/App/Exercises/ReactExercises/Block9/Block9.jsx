import React from 'react';

import './style.css';
import { Click5 } from '../Click5/Click5';
import { SeeOrNot } from '../SeeOrNot/SeeOrNot';
import { MoreOrLess } from '../MoreOrLess/MoreOrLess';

export function Block9() {
  return (
    <div>
      <Click5 />
      <hr />
      <SeeOrNot />
      <hr />
      <MoreOrLess />
    </div>
  );
}
