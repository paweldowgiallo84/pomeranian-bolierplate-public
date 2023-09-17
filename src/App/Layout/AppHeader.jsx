import React from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';
import { Link, NavLink } from 'react-router-dom';
import arrowDown from '../Images/toggle-arrow.svg';
import settingsIcon from '../Images/setting.svg';
import user from '../Images/user-image.png';
import { MenuIcon } from '../Components/Icons/MenuIcon';
import { UserIcon } from '../Components/Icons/UserIcon';

export function AppHeader({
  setSidebarVisible,
  setUserInfoIsVisible,
  userInfoIsVisible,
}) {
  const showSidebar = () => {
    setSidebarVisible((current) => !current);
  };

  const showUserInfo = () => {
    setUserInfoIsVisible((current) => !current);
  };

  return (
    <header>
      <div className="header__sidebar__menu" onClick={() => showSidebar()}>
        <MenuIcon />
      </div>
      <Link to="/">
        <Logo />
      </Link>
      <div className="menu">
        <NavLink className="settings-btn" to="settings">
          <img src={settingsIcon} className="settins-logo" alt="" />
        </NavLink>

        <div className="user-profile">
          <div className="profil-image">
            <img
              className="profile__imege-avatar"
              src={user}
              alt="user_avatar"
            />
            <div className="profile__image-icon">
              <UserIcon />
            </div>
          </div>
          <div className="user">
            <p className="user-name">Paweł</p>
            <p className="user-position">kursant</p>
          </div>
        </div>
        <button className="arrow-btn" onClick={() => showUserInfo()}>
          <img
            src={arrowDown}
            className={userInfoIsVisible ? 'arrow rotate' : 'arrow'}
            alt=""
          />
        </button>
      </div>
    </header>
  );
}
