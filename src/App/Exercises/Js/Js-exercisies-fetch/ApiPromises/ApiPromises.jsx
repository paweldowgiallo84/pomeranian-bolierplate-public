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
            console.log(secondResponses);
            setPokemons(pokemonsData);
            setIsLoading(false);
          })
          .catch((error) => {
            setError(error?.message);
            setIsLoading(false);
          });
      })
      .catch((error) => {
        setError(error?.message);
        setIsLoading(false);
      });
  }, []);

  const getTypeOfPokemon = (typeOfPokemon = []) =>
    typesIcon[typeOfPokemon[0].type.name];
  const getPokemonHP = (pokemonHp = []) => pokemonHp[0].base_stat;
  const getPokemonAtt = (pokemonAtt = []) => pokemonAtt[1].base_stat;
  const getPokemonDef = (pokemonDef = []) => pokemonDef[2].base_stat;
  const getPokemonSpecAtt = (pokemonSAtt = []) => pokemonSAtt[3].base_stat;
  const getPokemonSpecDef = (pokemonSDef = []) => pokemonSDef[4].base_stat;
  const getPokemonSpd = (pokemonSpd = []) => pokemonSpd[5].base_stat;
  const getTypeOfPokemonClassName = (typeOfPokemoClassName = []) =>
    typeOfPokemoClassName[0].type.name;

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
        getPokemonDef={getPokemonDef}
        getPokemonSpecAtt={getPokemonSpecAtt}
        getPokemonSpecDef={getPokemonSpecDef}
        getPokemonSpd={getPokemonSpd}
      />
    </div>
  );
};

export default ApiPromises;
