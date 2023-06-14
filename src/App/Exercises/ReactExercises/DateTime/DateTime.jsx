import { useState } from 'react';
import './styles.css';

export const DateTime = () => {
  let hour = new Date().getHours();
  const [currentHour, setCurentHour] = useState(hour);

  let minut = new Date().getMinutes();
  const [currentMinut, setCurentMinut] = useState(minut);

  let second = new Date().getSeconds();
  const [currentSecond, setCurentSecond] = useState(second);

  const updateTime = () => {
    let hour = new Date().getHours();
    setCurentHour(hour);

    let minut = new Date().getMinutes();
    setCurentMinut(minut);

    let second = new Date().getSeconds();
    setCurentSecond(second);
  };

  setTimeout(updateTime, 1000);
  console.log(hour);
  console.log(minut);
  console.log(second);

  return (
    <div className="timer">
      <div className="hours clock">{currentHour}</div>
      <div className="minuts clock">{currentMinut}</div>
      <div className="seconds clock">{currentSecond}</div>
      <div></div>
    </div>
  );
};
