import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removePokemon } from "../Redux/myPokemonSlice";
import { showToast } from "../Redux/toastSlice"; // 🚀 Import showToast
import { RootState } from "../Redux/store";

const MyPokemonPage: React.FC = () => {
  const dispatch = useDispatch();
  const myPokemons = useSelector((state: RootState) => state.myPokemon.myPokemonList);

  const handleRemovePokemon = (id: number, name: string) => {
    dispatch(removePokemon(id));

    // 🚀 Tampilkan toast setelah Pokémon dihapus
    dispatch(
      showToast({
        message: `${name} removed from your collection!`,
        variant: "release",
      })
    );
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold text-center">My Pokémon Collection</h1>

      {myPokemons.length === 0 ? (
        <p className="text-center text-gray-500">You have no Pokémon yet.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {myPokemons.map((pokemon) => (
            <div key={pokemon.id} className="border p-4 rounded shadow-md bg-white text-center">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-24 h-24 object-contain mx-auto" />
              <h2 className="text-lg font-bold capitalize">{pokemon.name}</h2>
              <button onClick={() => handleRemovePokemon(pokemon.id, pokemon.name)} className="mt-2 bg-red-500 text-white px-3 py-1 rounded w-full hover:bg-red-600">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPokemonPage;
