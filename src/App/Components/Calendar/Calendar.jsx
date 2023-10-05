import { useEffect, useState } from 'react';
import './styles.css';

export const AppCalendar = () => {
  const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
  const calendarDaycontainer = Array(42).fill('day');
  const [actualYear, setActualYear] = useState('');
  const [actualMonth, setActualMonth] = useState('');
  const [actualDay, setActualDay] = useState('');

  const date = new Date();

  useEffect(() => {
    setActualYear(date.getFullYear());
    setActualMonth(date.getMonth() + 1);
    setActualDay(
      date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`
    );
  }, []);

  const firtsDayOfMonth = () => {
    const newDate = new Date();
    newDate.setDate(1);
    const firstDayOfMonth = newDate.getDay();

    return firstDayOfMonth;
  };

  const numberOfdaysInMonth = () => {
    const newDate = new Date();
    newDate.setMonth(newDate.getMonth() + 1);
    newDate.setDate(0);
    const numberOfDaysInMonth = newDate.getDate();

    return numberOfDaysInMonth;
  };

  // date.setMonth(date.getMonth() + 1);
  // date.setDate(0);

  // const daysOfCurrentMonth = date.getDate();

  // console.log(actualYear, actualMonth, actualDay);
  // console.log('number of days of current monhy: ', daysOfCurrentMonth);
  // console.log(date.getDay());
  // console.log(date.getMonth());

  console.log(numberOfdaysInMonth());

  return (
    <div>
      <div>Tutaj będzie kalenrzaż... kiedyś... może</div>

      <div id="calendar">
        <div id="calendar__header">
          <button
            id="prev__year"
            className="calendar__header--navigate__btn"
          >{`${'<<'}`}</button>
          <button
            id="prev__month"
            className="calendar__header--navigate__btn"
          >{`${'<'}`}</button>
          <span
            id="date__now"
            className="calendar__header--navigate__date"
          >{`${actualYear} - ${actualMonth} - ${actualDay}`}</span>
          <button
            id="next__month"
            className="calendar__header--navigate__btn"
          >{`${'>'}`}</button>
          <button
            id="next__year"
            className="calendar__header--navigate__btn"
          >{`${'>>'}`}</button>
        </div>
        <hr className="calendar__divider" />
        <div id="days__of__week">
          {daysOfWeek.map((days, index) => (
            <span
              key={index}
              className={
                index === date.getDay()
                  ? 'calendar__days__of__week current__day'
                  : 'calendar__days__of__week'
              }
            >
              {days}
            </span>
          ))}
        </div>
        <hr className="calendar__divider" />
        <div id="days__of__month">
          {calendarDaycontainer.map((day, index) => (
            <div
              key={index}
              onClick={(e) => console.log(e.target)}
              className="calendar__container_day"
            >
              {`${day} ${index % 7}`}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
