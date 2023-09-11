import { useState } from 'react';
import './styles.css';

export const ClockMobile = () => {
  let hour = new Date().getHours();
  const [currentHour, setCurentHour] = useState(hour);

  let minut = new Date().getMinutes();
  const [currentMinut, setCurentMinut] = useState(minut);

  const updateTime = () => {
    let hour = new Date().getHours();
    setCurentHour(hour);

    let minut = new Date().getMinutes();
    setCurentMinut(minut);
  };

  setTimeout(updateTime, 1000);

  return (
    <div className="clock__mobile">
      <div className="clock__mobile--hour">{currentHour}</div>:
      <div className="clock__mobile--minutes">{currentMinut}</div>
    </div>
  );
};
