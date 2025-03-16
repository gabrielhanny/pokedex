import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "./pokemonSlice";

// **State untuk daftar Pokémon yang ditangkap**
interface MyPokemonState {
  myPokemonList: Pokemon[];
}

const initialState: MyPokemonState = {
  myPokemonList: [],
};

const myPokemonSlice = createSlice({
  name: "myPokemon",
  initialState,
  reducers: {
    addPokemon: (state, action: PayloadAction<Pokemon>) => {
      state.myPokemonList.push(action.payload);
    },
    removePokemon: (state, action: PayloadAction<number>) => {
      state.myPokemonList = state.myPokemonList.filter((pokemon) => pokemon.id !== action.payload);
    },
    clearMyPokemons: (state) => {
      state.myPokemonList = [];
    },
  },
});

export const { addPokemon, removePokemon, clearMyPokemons } = myPokemonSlice.actions;
export default myPokemonSlice.reducer;
