import React, { useState } from 'react';
import cardReverse from '../images/pokemon-card-revrse.png';

const PokemonData = ({
  getPokemons,
  getTypeOfPokemon,
  getPokemonHP,
  getTypeOfPokemonClassName,
  getPokemonAtt,
  getPokemonDef,
  getPokemonSpecAtt,
  getPokemonSpecDef,
  getPokemonSpd,
}) => {
  const [reverseVisible, setReverseVisible] = useState(false);

  const showReverse = () => {
    
  };

  return (
    <div className="container--grid-wraper">
      {getPokemons.map((pokemon, index) => (
        <div
          onClick={showReverse}
          key={index}
          className={`container--grid-tile container--grid-${getTypeOfPokemonClassName(
            pokemon.types
          )}`}
        >
          <div className="container-header">
            <span className="pokemon-name">{pokemon.name}</span>
            <span className="pokemon-hp">{getPokemonHP(pokemon.stats)}hp</span>
            <span className="pokemon-type">
              {getTypeOfPokemon(pokemon.types)}
            </span>
          </div>
          <div className="pokemon-image">
            <img src={pokemon.sprites.front_default} alt={pokemon.name} />
          </div>
          <div className="pokemon-type-weight-height">
            <span>Lenght: {pokemon.height}</span>
            <span>Weight: {pokemon.weight} lbs.</span>
            <span>{getTypeOfPokemonClassName(pokemon.types)}</span>
          </div>
          <hr className="card__line__divider" />
          <div className="pokemon__stats">
            <span>Attack: {getPokemonAtt(pokemon.stats)}</span>
            <span>Defence: {getPokemonDef(pokemon.stats)}</span>
            <span>Special Attack: {getPokemonSpecAtt(pokemon.stats)}</span>
            <span>Special Deffense: {getPokemonSpecDef(pokemon.stats)}</span>
            <span>Speed: {getPokemonSpd(pokemon.stats)}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PokemonData;
