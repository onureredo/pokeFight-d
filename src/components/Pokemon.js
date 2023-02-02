import axios from 'axios'
import React, { useState, useEffect } from 'react'

function Pokemon({ pokemonId }) {
    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
            .then(response => {
                console.log(response.data);

            });
    }, [pokemonId]);


    return (
        <div></div>
    )
}

export default Pokemon