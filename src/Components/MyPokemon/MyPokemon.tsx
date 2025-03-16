import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../Redux/store";
import { removePokemon } from "../../Redux/myPokemonSlice";

const MyPokemon: React.FC = () => {
  const myPokemonList = useSelector((state: RootState) => state.myPokemon.myPokemonList);
  const dispatch = useDispatch();

  return (
    <div>
      {myPokemonList.length === 0 ? (
        <p className="text-center text-gray-500">You haven't caught any Pokémon yet.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {myPokemonList.map((pokemon) => (
            <div key={pokemon.id} className="border p-4 rounded shadow-md bg-white">
              <img src={pokemon.sprites.front_default} alt={pokemon.name} className="w-full h-32 object-contain" />
              <h2 className="text-lg font-bold text-center capitalize">{pokemon.name}</h2>
              <button onClick={() => dispatch(removePokemon(pokemon.id))} className="mt-2 bg-red-500 text-white px-3 py-1 rounded w-full hover:bg-red-600">
                Release Pokémon
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyPokemon;
