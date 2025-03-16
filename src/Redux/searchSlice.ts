import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { Pokemon } from "./pokemonSlice"; // Import tipe data dari pokemonSlice.ts

// **Tipe data state pencarian**
interface SearchState {
  pokemon: Pokemon | null;
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: SearchState = {
  pokemon: null,
  status: "idle",
  error: null,
};

// **Thunk untuk mencari Pokémon berdasarkan nama atau ID**
export const searchPokemon = createAsyncThunk("search/fetchPokemon", async (query: string) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);

  if (!response.ok) {
    throw new Error("Pokémon not found");
  }

  return await response.json(); // Mengembalikan detail Pokémon
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    clearSearch: (state) => {
      state.pokemon = null;
      state.status = "idle";
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(searchPokemon.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(searchPokemon.fulfilled, (state, action: PayloadAction<Pokemon>) => {
        state.status = "succeeded";
        state.pokemon = action.payload;
      })
      .addCase(searchPokemon.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Something went wrong";
        state.pokemon = null;
      });
  },
});

export const { clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
