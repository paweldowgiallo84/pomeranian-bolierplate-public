import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

import { AppHeader } from './AppHeader';
import { AppFooter } from './AppFooter';
import { ErrorBoundary } from './ErrorBoundary';

import './styles/layout.css';
import { AppAside } from './AppAside';
import Cookies from '../Components/Cookies/Cookies';
import { MobileUpheader } from './MobileUpheader';

export const Layout = ({ userInfoIsVisible, setUserInfoIsVisible }) => {
  const [withSidebar, setWithSidebar] = useState(true);
  const [isSidebarVisible, setSidebarVisible] = useState(false);
  // const [userInfoIsVisible, setUserInfoIsVisible] = useState(false);

  useEffect(() => {
    function hideSidebar() {
      if (window.innerWidth <= 360) setWithSidebar(false);
      else setWithSidebar(true);
    }
    hideSidebar();
    window.addEventListener('resize', hideSidebar);
    return () => window.removeEventListener('resize', hideSidebar);
  }, []);

  useEffect(() => {
    const refreshOnStateChange = () => {
      window.location.reload();
    };
    document.addEventListener('statechange', refreshOnStateChange);
    return () =>
      document.removeEventListener('statechange', refreshOnStateChange);
  }, [isSidebarVisible]);

  return (
    <ErrorBoundary>
      <Cookies />
      <div className="layout">
        <MobileUpheader />
        <AppHeader
          setSidebarVisible={setSidebarVisible}
          userInfoIsVisible={userInfoIsVisible}
          setUserInfoIsVisible={setUserInfoIsVisible}
        />
        {(isSidebarVisible || withSidebar) && <AppAside />}
        <main>
          <Outlet />
        </main>
        <AppFooter />
      </div>
    </ErrorBoundary>
  );
};
