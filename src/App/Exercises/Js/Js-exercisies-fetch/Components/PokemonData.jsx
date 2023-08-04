import React from 'react';

const PokemonData = ({
  getPokemons,
  getTypeOfPokemon,
  getPokemonHP,
  getTypeOfPokemonClassName,
  pokemon,
  getPokemonAtt,
}) => {
  return (
    <div className="container--grid-wraper">
      {getPokemons.map((pokemon, index) => (
        <div
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
        </div>
      ))}
    </div>
  );
};

export default PokemonData;
