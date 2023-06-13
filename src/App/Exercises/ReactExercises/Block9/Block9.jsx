import React from 'react';

import './style.css';
import { Click5 } from '../Click5/Click5';
import { SeeOrNot } from '../SeeOrNot/SeeOrNot';
import { MoreThen10 } from '../MoreThen10/MoreThen10';

export function Block9() {
  return (
    <div>
      <Click5 />
      <hr />
      <SeeOrNot />
      <hr />
      <MoreThen10 />
    </div>
  );
}
