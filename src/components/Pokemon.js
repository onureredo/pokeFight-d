import axios from "axios";
import React, { useState, useEffect } from "react";
import not_found from "../assets/images/not_found.png";

function Pokemon() {
  const [pokemon, setPokemon] = useState([]);
  const [pokemonId, setPokemonId] = useState(Math.floor(Math.random() * 1000));

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
      .then((response) => {
        // console.log(response.data);
        setPokemon(response.data);
      });
  }, [pokemonId]);

  const handleRandomPokemon = () => {
    const randomId = Math.floor(Math.random() * 1000);
    setPokemonId(randomId);
  };

  return (
    <div className="pokemon-card">
      {pokemon.name ? (
        <>
          <div className="pokemon-header">
            <h1>{pokemon.name.toUpperCase()}</h1>
          </div>
          {pokemon.sprites.other.dream_world.front_default ? (
            <img
              src={pokemon.sprites?.other?.dream_world.front_default}
              alt={pokemon.name}
            />
          ) : (
            <img src={not_found} alt="not_found" />
          )}
          <div class="pokeball">
            <div class="border-circle">
              <div class="inner-circle">
                <div class="pokeball-button">
                  <button onClick={handleRandomPokemon}></button>
                </div>
              </div>
            </div>
            <div class="border-bar"></div>
            <div class="bright1"></div>
            <div class="bright2"></div>
          </div>
          <div className="hp-bar">
            <div
              className="fill"
              style={{ width: `${pokemon.stats[0].base_stat}` }}
            >
              <p>HP: {pokemon.stats[0].base_stat}</p>
            </div>
          </div>

          <div className="pokemon-details">
            <div className="left">
              <p>Attack: {pokemon.stats[1].base_stat}</p>
              <p>XP: {pokemon.base_experience}</p>
            </div>
            <div className="right">
              <p>Defense: {pokemon.stats[2].base_stat}</p>
              <p>Speed: {pokemon.stats[5].base_stat}</p>
            </div>
          </div>
        </>
      ) : (
        <p>loading...</p>
      )}
    </div>
  );
}

export default Pokemon;
