import React, { ReactNode } from "react";
import { Title } from "./Title";
import { Pokemons } from "./Pokemons";
import { Pokemon } from "./Pokemon";

// Tipe props untuk PokemonList
type PokemonListProps = {
  children: ReactNode;
};

// Deklarasi komponen utama PokemonList yang memiliki sub-komponen (Compound Components)
export const PokemonList: React.FC<PokemonListProps> & {
  Title: typeof Title;
  Pokemons: typeof Pokemons;
  Pokemon: typeof Pokemon;
} = ({ children }) => {
  return <div className="max-w-4xl mx-auto p-4">{children}</div>;
  // Membungkus konten agar tidak terlalu lebar dan memiliki padding
};

// Menambahkan sub-komponen agar bisa diakses sebagai PokemonList.Title, PokemonList.Pokemons, dan PokemonList.Pokemon
PokemonList.Title = Title;
PokemonList.Pokemons = Pokemons;
PokemonList.Pokemon = Pokemon;
