import { combineReducers } from "redux";
import pokemonReducer from "./pokemonSlice";
import searchReducer from "./searchSlice";
import myPokemonReducer from "./myPokemonSlice";
import navbarReducer from "./navbarSlice";
import toastReducer from "./toastSlice";
// Menggabungkan semua reducer dalam satu rootReducer
const rootReducer = combineReducers({
  pokemons: pokemonReducer,
  search: searchReducer,
  myPokemon: myPokemonReducer,
  navbar: navbarReducer,
  toast: toastReducer,
});

export default rootReducer; // Export rootReducer agar bisa digunakan di store
