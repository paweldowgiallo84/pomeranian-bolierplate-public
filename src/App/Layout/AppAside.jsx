import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';
import { FAQIcon } from '../Components/Icons/FAQ';
import { BlogIcon } from '../Components/Icons/BlogIcon';
import { CodeWarsIcon } from '../Components/Icons/CodeWarsIcon';
import { CssBattleIcon } from '../Components/Icons/CssBattleIcon';
import { TechStackIcon } from '../Components/Icons/TechStackIcon';


export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <HouseIcon />
              <div className="mobile__hiden-only">Dashboard</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="CV">
              <PersonalCardIcon />
              <div className="mobile__hiden-only">Moje CV</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="techstack">
              <TechStackIcon />
              <div className="mobile__hiden-only">Tech Stack</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blocks">
              <ElementIcon />
              <div className="mobile__hiden-only">Bloki</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="exercises">
              <EditIcon />
              <div className="mobile__hiden-only">Ćwiczenia</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="calendar">
              <CalendarIcon />
              <div className="mobile__hiden-only">Kalendarz</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blog">
              <BlogIcon />
              <div className="mobile__hiden-only">Blog</div>
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="faq">
              <FAQIcon />
              <div className="mobile__hiden-only">FAQ</div>
            </NavLink>
          </li>
          <hr />
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              className="aside-row"
              href="https://www.codewars.com/users/paweldowgiallo84"
            >
              <CodeWarsIcon />
              <div className="mobile__hiden-only">CodeWars</div>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              className="aside-row"
              href="https://cssbattle.dev/player/M57uw8LegAcKBV8BHC0szQdWVTN2"
            >
              <CssBattleIcon />
              <div className="mobile__hiden-only">Css Battle</div>
            </a>
          </li>
          <hr />
          <li>
            <NavLink className="aside-row" to="settings">
              <SettingIcon />
              <div className="mobile__hiden-only">Ustawienia</div>
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
