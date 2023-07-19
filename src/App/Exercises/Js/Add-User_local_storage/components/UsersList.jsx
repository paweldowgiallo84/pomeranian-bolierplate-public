import React from 'react';

const UsersList = ({ userArray }) => {
  return (
    <div className="users-section">
      {userArray.map((user) => (
        <div className="user">
          <span className="user-name">{user.nick}</span>
          <button className="user-remove-btn">X</button>
        </div>
      ))}
    </div>
  );
};

export default UsersList;