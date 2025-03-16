import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchPokemon, clearSearch } from "../Redux/searchSlice";
import { RootState } from "../Redux/store";

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const { pokemon, status, error } = useSelector((state: RootState) => state.search);

  const [query, setQuery] = useState("");
  const [searchType, setSearchType] = useState("name"); // Default pencarian berdasarkan nama

  const handleSearch = () => {
    if (query.trim() !== "") {
      dispatch(searchPokemon(query));
    }
  };

  const handleClear = () => {
    setQuery("");
    dispatch(clearSearch());
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Search Pokémon</h1>

      {/* Input Pencarian */}
      <div className="flex gap-2 mb-4">
        <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Enter Pokémon name or type..." className="border p-2 rounded w-full" />

        {/* Dropdown Pilihan Pencarian */}
        <select value={searchType} onChange={(e) => setSearchType(e.target.value)} className="border p-2 rounded">
          <option value="name">Name</option>
          <option value="type">Type</option>
        </select>

        <button onClick={handleSearch} className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>

        <button onClick={handleClear} className="bg-gray-500 text-white px-4 py-2 rounded">
          Clear
        </button>
      </div>

      {/* Menampilkan Hasil Pencarian */}
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p className="text-red-500">{error}</p>}
      {pokemon && (
        <div className="border p-4 rounded shadow-md">
          <h2 className="text-xl font-bold">{pokemon.name}</h2>
          <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-32 h-32" />
          <p>Type: {pokemon.types.map((t: any) => t.type.name).join(", ")}</p>
        </div>
      )}
    </div>
  );
};

export default Search;
