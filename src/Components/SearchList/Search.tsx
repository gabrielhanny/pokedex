import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPokemon, clearSearch } from "../../Redux/searchSlice";
import { RootState, AppDispatch } from "../../Redux/store";
import { PokemonList } from "../PokemonList/PokemonList";

const Search: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pokemon, status, error } = useSelector((state: RootState) => state.search);

  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("name"); // "name" atau "type"

  const handleSearch = () => {
    if (query.trim() !== "") {
      dispatch(searchPokemon(query));
    }
  };

  return (
    <div className="p-4 flex flex-col items-center">
      <h2 className="text-xl font-bold mb-4">Search Pokémon</h2>

      {/* Input & Dropdown */}
      <div className="flex gap-2">
        <input type="text" placeholder={`Search Pokémon by ${searchType}`} value={query} onChange={(e) => setQuery(e.target.value)} className="border p-2 rounded-md" />
        <select value={searchType} onChange={(e) => setSearchType(e.target.value)} className="border p-2 rounded-md">
          <option value="name">By Name</option>
          <option value="type">By Type</option>
        </select>
        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded-md">
          Search
        </button>
        <button onClick={() => dispatch(clearSearch())} className="bg-gray-400 text-white px-4 py-2 rounded-md">
          Clear
        </button>
      </div>

      {/* Hasil Pencarian */}
      <div className="mt-4">
        {status === "loading" && <p>Loading...</p>}
        {error && <p className="text-red-500">{error}</p>}
        {pokemon && (
          <PokemonList.Pokemon
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            height={pokemon.height}
            weight={pokemon.weight}
            image={pokemon?.sprites?.front_default || ""}
            types={pokemon?.types?.map((t) => t.type.name) || []}
            abilities={pokemon?.abilities?.map((a) => a.ability.name) || []}
          />
        )}
      </div>
    </div>
  );
};

export default Search;
