import React from 'react';

const UsersList = ({ userArray }) => {
  const removeUser = () => {
    console.log();
  };

  return (
    <div className="users-section">
      {userArray.map((user) => (
        <div className="user">
          <span className="user-name">{user.nick}</span>
          <button id={user.id} className="user-remove-btn" onClick={removeUser}>
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
