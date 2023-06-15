import { NavLink } from 'react-router-dom';

import './styles/aside.css';
import { HouseIcon } from '../Components/Icons/HouseIcon';
import { ElementIcon } from '../Components/Icons/ElementIcon';
import { EditIcon } from '../Components/Icons/EditIcon';
import { PersonalCardIcon } from '../Components/Icons/PersonalCardIcon';
import { SettingIcon } from '../Components/Icons/SettingIcon';
import { CalendarIcon } from '../Components/Icons/CalendarIcon';

export function AppAside() {
  return (
    <aside>
      <nav>
        <ul>
          <li>
            <NavLink className="aside-row" to="dashboard">
              <HouseIcon />
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="CV">
              <PersonalCardIcon />
              Moje CV
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blocks">
              <ElementIcon />
              Bloki
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="exercises">
              <EditIcon />
              Ćwiczenia
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="calendar">
              <CalendarIcon />
              Kalendarz
            </NavLink>
          </li>
          <li>
            <NavLink className="aside-row" to="blog">
              <CalendarIcon />
              Blog
            </NavLink>
          </li>
          <hr />
          <li>
            <NavLink className="aside-row" to="settings">
              <SettingIcon />
              Ustawienia
            </NavLink>
          </li>
        </ul>
      </nav>
      <p style={{ padding: '1rem 0' }}>Sidebar items, widgets, etc</p>
    </aside>
  );
}
