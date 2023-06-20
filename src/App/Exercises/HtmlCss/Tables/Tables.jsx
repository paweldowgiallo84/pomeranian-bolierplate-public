import { useState } from 'react';
import './style.css';

export function Tables() {
  const [foster_pets, setFoster_pets] = useState([
    {
      id: 1,
      name: 'Burek',
      age: 4,
      sex: 'pies',
      breed: 'mieszaniec',
      size: 'średni',
      chip: false,
      sterilized: true,
    },

    {
      id: 2,
      name: 'Łatka',
      age: 7,
      sex: 'suczka',
      breed: 'owczarek niemiecki',
      size: 'duży',
      chip: true,
      sterilized: true,
    },

    {
      id: 3,
      name: 'Reksio',
      age: 12,
      sex: 'pies',
      breed: 'beagle',
      size: 'duży',
      chip: true,
      sterilized: true,
    },

    {
      id: 4,
      name: 'Lessie',
      age: 1,
      sex: 'suczka',
      breed: 'chihuahua',
      size: 'mały',
      chip: false,
      sterilized: true,
    },
  ]);

  const [NewName, setNewName] = useState('');

  const addRandomDog = () => {
    setFoster_pets((availeble_before) => [
      ...availeble_before,
      {
        id: 1,
        name: NewName,
        age: 4,
        sex: '',
        breed: '',
        size: '',
        chip: false,
        sterilized: false,
      },
    ]);
  };

  return (
    <>
      <button onClick={addRandomDog}>Dodaj psa</button>
      <input
        type="text"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />

      <table className='dog-table' border={3} style={{ width: '100%' }}>
        <thead>
          <tr>
            {Object.keys(foster_pets[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {foster_pets.map((dog) => (
            <tr key={dog.id}>
              <td> {dog.id}</td>
              <td> {dog.name}</td>
              <td> {dog.age}</td>
              <td> {dog.sex}</td>
              <td> {dog.breed}</td>
              <td> {dog.size}</td>
              <td>
                <input type="checkbox" checked={dog.chip} />
              </td>
              <td>
                <input type="checkbox" checked={dog.sterilized} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
