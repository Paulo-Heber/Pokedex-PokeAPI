import { useEffect, useState } from "react";

export function usePokemonList(initialQuantity = 10) {

    const [pokemonsQuantity, setPokemonQuantity] = useState(initialQuantity);
    const [pokemonData, setPokemonData] = useState([]);
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${pokemonsQuantity}`);
            const data = await response.json();
            setPokemonList(data.results)
        }
        fetchData();
    }, [pokemonsQuantity]);

    function loadMore() {
        setPokemonQuantity(pokemonsQuantity + 10);
    }

    useEffect(() => {
        async function fetchPokemonUrl() {
            const dataPromises = pokemonList.map(async (pokemon) => {
                const response = await fetch(pokemon.url)
                return response.json();
            })
            const data = await Promise.all(dataPromises);
            setPokemonData(data);
        }
        fetchPokemonUrl();
    }, [pokemonList]);

    return { loadMore, pokemonData };
}

