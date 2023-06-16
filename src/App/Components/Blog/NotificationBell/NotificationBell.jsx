import { useState } from 'react';
import './styles.css';
import { NotificationIcon } from '../../Icons/Notification';

export const NotificationBell = () => {
  const [isvVsible, setIsVisible] = useState(true);
  const [isIcon, setIsIcon] = useState(true);

  function clickHandler() {
    let curentIsVisible = isvVsible;
    setIsVisible(!curentIsVisible);

    if (!curentIsVisible) {
      setIsIcon();
    } else {
      setIsIcon();
    }
  }

  return (
    <div className="notif-icon">
      <NotificationIcon onClick={clickHandler} />
      {isIcon}
    </div>
  );
};
