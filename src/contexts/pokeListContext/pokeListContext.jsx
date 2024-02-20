import { createContext, useContext, useState } from "react";

const PokeListContext = createContext();

export function PokeListProvider({ children }) {
    const [pokemonList, setPokemonList] = useState([]);

    return (
        <PokeListContext.Provider value={{ pokemonList, setPokemonList }}>
            {children}
        </PokeListContext.Provider>
    );
}

export function usePokeListContext() {
   return useContext(PokeListContext);
}