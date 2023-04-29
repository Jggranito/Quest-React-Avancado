import React, { createContext, useState } from 'react';

export const PokemonContext = createContext({
  pokemon: null,
  setPokemon: () => {}
});

export const PokemonProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState([]);

  return (
    <PokemonContext.Provider value={{ pokemon, setPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};