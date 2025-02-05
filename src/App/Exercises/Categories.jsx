import React from 'react';
import { NavLink } from 'react-router-dom';

import cssIcon from '../Images/tech-stack/CSS3.svg';
import htmlIcon from '../Images/tech-stack/HTML5.svg';
import jsIcon from '../Images/tech-stack/JavaScript.svg';
import reactIcon from '../Images/tech-stack/React.svg';

import './categories.css';

export const Categories = () => {
  return (
    <>
      <div className="exercises-categories">
        <h2>What I was learning</h2>

        <div className="excercises-list">
          <NavLink to="html-css">
            <div className="html__css__icon">
              {
                <img
                  className="html__icon"
                  src={htmlIcon}
                  alt="HTML & CSS - exercise list"
                />
              }
              {
                <img
                  className="css__icon"
                  src={cssIcon}
                  alt="HTML & CSS - exercise list"
                />
              }
            </div>
            <span className="icon__tech-name--hide">HTML & CSS</span>
          </NavLink>
          <NavLink to="js">
            {<img src={jsIcon} alt="JS - exercise list" />}
            <span className="icon__tech-name--hide">JS</span>
          </NavLink>
          <NavLink to="react">
            {<img src={reactIcon} alt="React - exercise list" />}
            <span className="icon__tech-name--hide">React</span>
          </NavLink>
          {/* <NavLink to="web-api">Web API - exercise list</NavLink> */}
          {/* <NavLink to="async">Asynchroniczność - exercise list</NavLink> */}
          {/* <NavLink to="firebase">Firebase - exercise list</NavLink> */}
        </div>
      </div>
    </>
  );
};
