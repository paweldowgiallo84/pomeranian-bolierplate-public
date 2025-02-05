import React from 'react';

import './style.css';
import { Click5 } from '../Click5/Click5';
import { SeeOrNot } from '../SeeOrNot/SeeOrNot';
import { MoreThen10 } from '../MoreThen10/MoreThen10';
import { MoreOrLess } from '../MoreOrLess/MoreOrLess';
import { DateTime } from '../DateTime/DateTime';
import { WhatNumber } from '../WhatNumber/WhatNumber';
import { Calculator } from '../Calculator/Calculator';

export function Block9() {
  return (
    <div>
      <DateTime />
      <hr />
      <Click5 />
      <hr />
      <SeeOrNot />
      <hr />
      <MoreThen10 />
      <hr />
      <MoreOrLess />
      <hr />
      <WhatNumber />
      <hr />
      <Calculator />
    </div>
  );
}
