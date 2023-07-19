import { useEffect, useState } from 'react';
import './styles.css';
import UsersList from './components/UsersList';

export function AddUserLocalStorage() {
  const LS_USER_ID = 'user_list_index';
  const LS_USER_NICK_LIST = 'user_list';

  const [userArray, setUserArray] = useState(
    JSON.parse(localStorage.getItem(LS_USER_NICK_LIST)) || []
  );
  const [getIdCounter, setIdCounter] = useState(
    JSON.parse(localStorage.getItem(LS_USER_ID)) || 0
  );

  const [getUserNick, setUserNick] = useState('');
  console.log(userArray);
  useEffect(() => {
    localStorage.setItem(LS_USER_NICK_LIST, JSON.stringify(userArray));
    localStorage.setItem(LS_USER_ID, getIdCounter.toString());
  }, [userArray, getIdCounter]);

  const addUserToArray = () => {
    if (userArray.some((userArray) => userArray.nick === getUserNick))
      alert('Użytkownik istnieje... wybierz inny nick');
    else if (getUserNick.trim() === '')
      alert('Sorki ale nic nie wpisałeś... podaj swój nick');
    else {
      const newUser = {
        id: getIdCounter,
        nick: getUserNick,
      };
      setUserArray([...userArray, newUser]);
      setIdCounter((prevId) => prevId + 1);
      console.log(newUser);

      return console.log(
        'Zapisano dane w Local Storage pod id użytkownika: ',
        getIdCounter,
        ' z wartością ',
        getUserNick
      );
    }
  };

  //-----------------------------------------------------------------

  // const UNIQE_LOCALSTORAGE_KEY = 'nameKey';
  // const UNIQUE_OBJECT_DATA_LS_KEY = 'objectUniqueKey';

  // const handleSave = () => {
  //   localStorage.setItem(UNIQE_LOCALSTORAGE_KEY, getUserNick);
  //   return console.log('Zapisano dane w Local Storage', getUserNick);
  // };

  // const handleRead = () => {
  //   const getLocalStorageNameData = localStorage.getItem(
  //     UNIQE_LOCALSTORAGE_KEY
  //   );
  //   return console.log(
  //     'Odczytano dane z Local Storage',
  //     getLocalStorageNameData
  //   );
  // };

  // const stringifyObject = () => {
  //   // it's encoding the data and making JSON object
  //   // we preparing data to send
  //   const objectToEncodeJSON = JSON.stringify(objectToEncode);
  //   return objectToEncodeJSON;
  // };

  // const parseJsonObject = () => {
  //   const objectToDecode = JSON.parse(stringifyObject());
  //   return console.log(objectToDecode);
  // };
  // parseJsonObject();

  // //generic functions
  // const genericParseJsonObjects = (jsonObject) => {
  //   const objectToDecode = JSON.parse(jsonObject);
  //   return objectToDecode;
  // };

  // //set object to local storage

  // const setDataToLocalStorage = () => {
  //   const storedData = localStorage.setItem(
  //     UNIQUE_OBJECT_DATA_LS_KEY,
  //     stringifyObject()
  //   );
  //   return storedData;
  // };
  // setDataToLocalStorage();

  // const getDataFromLocalStorage = () => {
  //   const dataFromLS = genericParseJsonObjects(
  //     localStorage.getItem(UNIQUE_OBJECT_DATA_LS_KEY)
  //   );

  //   console.log('decoded data with specyfic key: ', dataFromLS[5]);
  //   return console.log('decode data from LS - ', dataFromLS);
  // };
  // getDataFromLocalStorage();
  // //end set object to local storage

  return (
    <div className="add-user-container">
      <div className="user-input-section">
        <div>
          <span>NICK</span>
          <input
            className="user-nick-input"
            type="text"
            placeholder="user name"
            value={getUserNick}
            onChange={(event) => setUserNick(event.target.value)}
          />
        </div>
        <button className="user-input-btn" onClick={addUserToArray}>
          DODAJ
        </button>
      </div>
      <UsersList userArray={userArray} getIdCounter={getIdCounter} />
    </div>
  );
}
