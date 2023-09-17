import { useState } from 'react';
import './styles.css';
import Calendar from 'react-calendar';

export const AppCalendar = () => {
  const [value, setValue] = useState(new Date());

  function onChange(nextValue) {
    setValue(nextValue);
  }

  return (
    <div>
      <div>Tutaj będzie kalenrzaż... kiedyś... może</div>
      <div>
        <Calendar onChange={onChange} value={value} />
      </div>
    </div>
  );
};
