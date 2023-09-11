import React, { useState } from 'react';
import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';

import { NotFound } from './App/Components/NotFound/NotFound';

import { Blocks } from './App/Blocks';
import { Layout } from './App/Layout';
import { Dashboard } from './App/Dashboard';
import { Exercises } from './App/Exercises';
import { CV } from './App/Components/CV/CV';
import { AppCalendar } from './App/Components/Calendar/Calendar';
import { Settings } from './App/Components/Settings/Settings';
import { Blog } from './App/Components/Blog/Blog';
import { FAQ } from './App/Components/FAQ/FAQ';

export function App() {
  const [userInfoIsVisible, setUserInfoIsVisible] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path=""
          element={
            <Layout
              withSidebar
              userInfoIsVisible={userInfoIsVisible}
              setUserInfoIsVisible={setUserInfoIsVisible}
            />
          }
        >
          <Route index element={<Navigate to="dashboard" />} />
          <Route
            path="dashboard/*"
            element={<Dashboard userInfoIsVisible={userInfoIsVisible} />}
          />
          <Route path="CV/*" element={<CV />} />
          <Route path="exercises/*" element={<Exercises />} />
          <Route path="calendar/*" element={<AppCalendar />} />
          <Route path="blog/*" element={<Blog />} />
          <Route path="faq/*" element={<FAQ />} />
          <Route path="blocks/*" element={<Blocks />} />
          <Route path="settings/*" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
