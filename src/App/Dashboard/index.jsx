import './styles.css';

import hand from '../Images/waving-hand-sign.png';
import UserInfo from './UserInfo/UserInfo';
import { CategoryCards } from './CategoryCards/CategoryCards';

export const Dashboard = ({ userInfoIsVisible }) => {


  return (
    <div className={!userInfoIsVisible ? 'dashboard noUI' : 'dashboard'}>
      <div className="dashboard-main">
        <div className="dashboard-hello">
          <img className="hand-img" src={hand} alt="waving hand img" />
          <h1 className="dashboard-title">Hej, tu Paweł</h1>
        </div>
        <p className="dashboard-description">
          Poniżej znajdziesz najważniejsze informacje na temat mojej
          działalności
        </p>
        <div
          className={
            !userInfoIsVisible ? 'dashboard-content noUI' : 'dashboard-content'
          }
        >
          <CategoryCards />
        </div>
      </div>
      {userInfoIsVisible && <UserInfo />}
    </div>
  );
};
