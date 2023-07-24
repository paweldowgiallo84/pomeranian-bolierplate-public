import React, { useEffect, useState } from 'react';
/*
API is needed to deliver an id based on provided user name lenght.
In HTML is needed an input for that
*/

const ping = 5 * 1000;

const api = (userName) =>
  new Promise((resolve, reject) => {
    // Let's assume we have heavy load under this URL
    const mockedResponseFromServer = userName.length;

    setTimeout(() => {
      resolve({
        data: { id: mockedResponseFromServer },
        status: 200,
        message: 'OK',
      });
    }, ping);
  });

const TryCatchAndFinally = () => {
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getUserId = async (userName) => {
      if (!userName) return;
      try {
        const { data } = await api(userName);
        console.log('dla uzytkownika id to ' + data.id);
      } catch (err) {
        console.error(err);
      }
    };
    getUserId(userName);
  }, [userName]);

  const addName = (userName) => {
    setUserName(userName);
  };

  console.log(userName);

  return (
    <div>
      <input
        type="text"
        placeholder="enter user name"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
    </div>
  );
};

export default TryCatchAndFinally;

/*
const myFun = async () => {
  const obiecanki = new Promise((resolve, reject)=> {
    const user = {name: "Łukasz", surname:"Formela"}
    resolve(user);
  });

 

  try {
    const {name} = await obiecanki
    console.log(name);
  } catch(e) {
    console.error(e)
  }
}

 

 

const myFun = async () => {
  const obiecanki = new Promise((resolve, reject)=> {
    const user = {name: "Łukasz", surname:"Formela"}
    resolve(user);
  });

 

  try {
    const user = await obiecanki
    console.log(user);
  } catch(e) {
    console.error(e)
  }
}


const obiecanki = new Promise((resolve, reject)=> {
  const user = {name: "Łukasz", surname:"Formela"}
  resolve(user);
}).then((user) => `${user.name} ${user.surname}`).catch(err=>console.error(err))

*/
