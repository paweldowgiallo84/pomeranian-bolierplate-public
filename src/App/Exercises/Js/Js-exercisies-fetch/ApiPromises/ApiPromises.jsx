import { useEffect, useState } from 'react';
import { typesIcon } from '../Utils/utils';
import React from 'react';
import './../index';
import axios from 'axios';
import Spiner from '../Spinner/Spiner';
import PokemonData from '../Components/PokemonData';
// import PokemonData from '../Components/PokemonData';

const ApiPromises = () => {
  const [getPokemons, setPokemons] = useState([]);
  const [getIsLoading, setIsLoading] = useState(true);
  const [getError, setError] = useState(null);

  const BASE_POKEMON_API_URL = 'https://pokeapi.co/api/v2/pokemon?limit=200';

  useEffect(() => {
    axios
      .get(BASE_POKEMON_API_URL)
      .then((response) => {
        const pokemonList = response.data.results;
        const pokemonPromises = pokemonList.map((pokemon) =>
          axios.get(pokemon.url)
        );
        Promise.all(pokemonPromises)
          .then((secondResponses) => {
            const pokemonsData = secondResponses.map(
              (secondResponses) => secondResponses.data
            );
            setPokemons(pokemonsData);
            setIsLoading(false);
          })
          .catch((error) => {
            setError(error?.message);
            setIsLoading(false);
          });
        ////////////////////////////////////
      })
      .catch((error) => {
        setError(error?.message);
        setIsLoading(false);
      });
  }, []);

  const getTypeOfPokemon = (typeOfPokemon = []) =>
    typesIcon[typeOfPokemon[0].type.name];

  const getPokemonHP = (pokemonHp = []) => pokemonHp[0].base_stat;
  const getPokemonAtt = (pokemonHp = []) => pokemonHp[1].base_stat;
  const getPokemonSpecAtt = (pokemonHp = []) => pokemonHp[3].base_stat;
  const getPokemonDef = (pokemonHp = []) => pokemonHp[2].base_stat;
  const getPokemonSpecDef = (pokemonHp = []) => pokemonHp[4].base_stat;
  const getPokemonSpd = (pokemonHp = []) => pokemonHp[5].base_stat;

  const getTypeOfPokemonClassName = (typeOfPokemoClassName = []) =>
    typeOfPokemoClassName[0].type.name;

  //   const getPokemonTileBackground =

  //   console.log(getPokemons);

  return (
    <div className="container--promises">
      <h1>{getIsLoading && <Spiner />}</h1>
      <h2>{getError && getError}</h2>
      <PokemonData
        getPokemons={getPokemons}
        getTypeOfPokemon={getTypeOfPokemon}
        getPokemonHP={getPokemonHP}
        getTypeOfPokemonClassName={getTypeOfPokemonClassName}
        getPokemonAtt={getPokemonAtt}
      />
    </div>
  );
};

export default ApiPromises;
