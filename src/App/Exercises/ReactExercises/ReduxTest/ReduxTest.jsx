import React from 'react';
import './ReduxTest.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleProfile } from '../../../Store';

export const CardDetails = () => {
  const profile = useSelector((state) => {
    return state.testReducer.profile;
  });
  return (
    <div>
      CardDetails {profile}
      {profile === 'business' && <div>Company Logo</div>}
    </div>
  );
};

export const Accounts = () => {
  const profile = useSelector((state) => {
    return state.testReducer.profile;
  });
  const dispach = useDispatch();
  return (
    <div>
      Accounts
      <div>Current profile: {profile}</div>
      <button onClick={() => dispach(toggleProfile())}>Change profile</button>
    </div>
  );
};

export const Cards = () => {
  return (
    <div>
      Cards <CardDetails />
    </div>
  );
};

export const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Accounts />
      <Cards />
    </div>
  );
};

const ReduxTest = () => {
  // business, retail
  return (
    <div className="test-redux">
      Main Page
      <Dashboard />
    </div>
  );
};

export default ReduxTest;
