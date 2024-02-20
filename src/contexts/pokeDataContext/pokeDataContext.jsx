import { createContext, useContext } from "react";
import { usePokemonList } from "../../hooks/usePokemonList";

export const pokeDataContext = createContext(null)

export const PokeDataProvider = ({ children }) => {
    const { pokemonData, loadMore } = usePokemonList();
    return (
        <pokeDataContext.Provider value={{ PokeData: pokemonData, addPokemonToList: loadMore }}>
            {children}
        </pokeDataContext.Provider >
    )
}
