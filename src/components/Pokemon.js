import axios from "axios";
import React, { useState, useEffect } from "react";
import not_found from "../assets/images/not_found.png";

function Pokemon({ pokemonId }) {
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => {
        // console.log(response.data);
        setPokemon(response.data);
      });
  }, [pokemonId]);

  return (
    <div className="pokemon-card">
      {pokemon.name ? (
        <>
          <h1>{pokemon.name.toUpperCase()}</h1>
          {pokemon.sprites.other.dream_world.front_default ? (
            <img
              src={pokemon.sprites?.other?.dream_world.front_default}
              alt={pokemon.name}
            />
          ) : (
            <img src={not_found} alt="not_found" />
          )}
          <p>HP: {pokemon.stats[0].base_stat}</p>
          <p>Attack: {pokemon.stats[1].base_stat}</p>
          <p>Defense: {pokemon.stats[2].base_stat}</p>
          <p>Speed: {pokemon.stats[5].base_stat}</p>
          <p>XP: {pokemon.base_experience}</p>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default Pokemon;
