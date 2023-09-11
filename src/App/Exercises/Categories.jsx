import React from 'react';
import { NavLink } from 'react-router-dom';

import './categories.css';

export const Categories = () => {
  return (
    <>
      <div className="exercises-categories">
        <h2>What I was learning</h2>

        <div className='excercises-list'>
          <NavLink to="html-css">HTML & CSS - exercise list</NavLink>
          <NavLink to="js">JS - exercise list</NavLink>
          <NavLink to="react">React - exercise list</NavLink>
          {/* <NavLink to="web-api">Web API - exercise list</NavLink> */}
          {/* <NavLink to="async">Asynchroniczność - exercise list</NavLink> */}
          {/* <NavLink to="firebase">Firebase - exercise list</NavLink> */}
        </div>
      </div>
    </>
  );
};
