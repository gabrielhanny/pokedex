import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPokemons } from "../Redux/pokemonSlice";
import { RootState, AppDispatch } from "../Redux/store";
import { PokemonList } from "../Components/PokemonList/PokemonList";
import PokemonCard from "../Components/PokemonCard/PokemonCard";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { pokemons, status, error } = useSelector((state: RootState) => state.pokemons);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPokemons());
    }
  }, [dispatch, status]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* 🔹 Kontainer utama */}
      <div className="container mx-auto p-4">
        <h1 className="text-center text-2xl font-bold mt-4"></h1>

        <PokemonList.Title>POKE!</PokemonList.Title>

        {/* ✅ Grid responsif */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4 place-items-center">
          {status === "loading" ? (
            <p className="text-center text-gray-600">Loading...</p>
          ) : error ? (
            <p className="text-center text-red-500">{error}</p>
          ) : pokemons.length > 0 ? (
            pokemons.map((pokemon) => (
              // <PokemonList.Pokemon
              <PokemonCard
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                height={pokemon.height}
                weight={pokemon.weight}
                image={pokemon?.sprites?.front_default || ""}
                types={pokemon?.types?.map((t) => t.type.name) || []}
                abilities={pokemon?.abilities?.map((a) => a.ability.name) || []}
              />
            ))
          ) : (
            <p className="text-center text-gray-600">No Pokémon found.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
