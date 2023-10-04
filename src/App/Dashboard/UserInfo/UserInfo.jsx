import React from 'react';
import user from '../../Images/user-image.png';

const email = 'dowgiallopawel@gmail.com';
const phone = '+48-512-236-361';

const UserInfo = () => {
  return (
    <>
      <div className="user-info">
        <img className="user-image" src={user} alt="" />
        <h3 className="user-name">Paweł Dowgiałło</h3>
        <p className="user-location">Gdańsk</p>
        <div className="user-email">
          <p>
            <a href={`mailto:${email}`}>{`Email: ${email}`}</a>
          </p>
        </div>
        <div className="user-phone-number">
          <p>
            <a href={`tel:${phone}`}>{`Tel: ${phone}`}</a>
          </p>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
