// const logIncident = (incident, stack) => {
//   const err = new Error('Sorry there was an error on our side,' + incident);
//   err.stack = stack;
//   throw err;
//   // googleAPI('analytics', stack, incident)
// };

// const api = (output) =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve(output);
//     }, 2000);
//     reject(
//       logIncident(
//         'Unathorized',
//         'react app could resolve path ./src/components/components.jsx'
//       )
//     );
//   });

// const mockedResponseFromServer = {
//   users: [{ name: 'Lukas' }, { name: 'Adam' }],
// };

// const getUsers = async () => {
//   try {
//     const data = await api(mockedResponseFromServer);
//     return data;
//   } catch (err) {
//     console.error(err);
//   } finally {
//     console.log('Finished loading data.');
//   }
// };

// const getAllTusers = async () => {
//   console.log(await getUsers());
// };

// getAllTusers();
