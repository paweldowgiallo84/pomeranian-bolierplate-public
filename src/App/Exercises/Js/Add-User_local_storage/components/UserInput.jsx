import React from 'react';

const UserInput = (setDataToLocalStorage, handleSave, addUserToArray) => {
  return (
    <div className="user-input-section">
      <div>
        <span>NICK</span>
        <input
          className="user-nick-input"
          type="text"
          placeholder="user name"
          onChange={(event) => setDataToLocalStorage(event.target.value)}
        />
      </div>
      <button className="user-input-btn" onClick={() => addUserToArray}>
        DODAJ
      </button>
    </div>
  );
};

export default UserInput;
