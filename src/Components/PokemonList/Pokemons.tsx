import React, { ReactNode } from "react";
import { Pokemon } from "./Pokemon";

// Mendefinisikan tipe untuk properti (props)
type PokemonsProps = {
  children: ReactNode; // Komponen anak yang akan dirender di dalam Pokemons
};

// Komponen Pokemons yang berfungsi sebagai container untuk daftar Pokemon
export const Pokemons: React.FC<PokemonsProps> & { Pokemon: typeof Pokemon } = ({ children }) => {
  return <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">{children}</div>;
};

// Menambahkan komponen `PokemonCard` sebagai sub-komponen dari `Pokemons`
Pokemons.Pokemon = Pokemon;
