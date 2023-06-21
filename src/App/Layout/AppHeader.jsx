import React from 'react';

import './styles/header.css';
import { Logo } from '../Components/Logo/Logo';
import { Link } from 'react-router-dom';
import arrowDown from '../Images/toggle-arrow.svg';
import settingsIcon from '../Images/setting.svg';

export function AppHeader() {
  return (
    <header>
      <Link to="/">
        <Logo />
      </Link>
      <div className="menu">
        <button
          className="settings-btn"
          onClick={() => {
            console.log('Settings Clicked');
          }}
        >
          <img src={settingsIcon} className="settins-logo" alt="" />
        </button>

        <div className="user-profile">
          <div className="profil-image"></div>
          <div className="user">
            <p className="user-name">Paweł</p>
            <p className="user-position">kursant</p>
          </div>
        </div>
        <button
          className="arrow-btn"
          onClick={() => {
            console.log('Arrow Clicked');
          }}
        >
          <img src={arrowDown} className="arrow" alt="" />
        </button>

        {/* <div className="header-title"></div> */}
      </div>
    </header>
  );
}
