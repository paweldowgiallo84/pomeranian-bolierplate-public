import './styles/mobileUpheader.css';
import { ClockMobile } from '../Components/Clock/ClockMobile';
import MobileIcons from '../Components/Icons/MobileIcons.svg';

export function MobileUpheader() {
  return (
    <div className="mobile--only">
      <div className="mobile__upheader__container">
        <div className="up__area">
          <ClockMobile />
          <div className="up__area--notch"></div>
          <img className="up__area--mobile-icon" src={MobileIcons} alt="" />
        </div>
        <div className="down__area">
          <div>
            <input
              className="down__area-search-area"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
