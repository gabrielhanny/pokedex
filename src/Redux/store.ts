import { configureStore } from "@reduxjs/toolkit";
import pokemonReducer from "./pokemonSlice";
import searchReducer from "./searchSlice";
import myPokemonReducer from "./myPokemonSlice";
import navbarReducer from "./navbarSlice";
import toastReducer from "./toastSlice";

const store = configureStore({
  reducer: {
    pokemons: pokemonReducer,
    search: searchReducer,
    myPokemon: myPokemonReducer,
    navbar: navbarReducer,
    toast: toastReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
