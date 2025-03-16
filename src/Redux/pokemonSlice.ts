import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprites: { front_default: string };
  types: { type: { name: string } }[];
  abilities: { ability: { name: string } }[];
}

interface PokemonState {
  pokemons: Pokemon[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

const initialState: PokemonState = {
  pokemons: [],
  status: "idle",
  error: null,
};

// ✅ Fetch Pokémon
export const fetchPokemons = createAsyncThunk("pokemon/fetchPokemons", async () => {
  const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=24");
  const data = await response.json();

  // Fetch detail setiap Pokemon
  const detailedPokemons = await Promise.all(
    data.results.map(async (pokemon: { url: string }) => {
      const res = await fetch(pokemon.url);
      return res.json();
    })
  );

  return detailedPokemons;
});

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPokemons.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPokemons.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.pokemons = action.payload;
      })
      .addCase(fetchPokemons.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message ?? "Failed to fetch Pokémon";
      });
  },
});

export default pokemonSlice.reducer;
