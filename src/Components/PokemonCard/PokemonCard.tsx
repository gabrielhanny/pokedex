import React from "react";
import { useDispatch } from "react-redux";
import { addPokemon } from "../../Redux/myPokemonSlice";
import { showToast } from "../../Redux/toastSlice"; // 🚀 Import showToast
import { Pokemon } from "../../Redux/pokemonSlice";

interface PokemonProps {
  id: number;
  name: string;
  height: number;
  weight: number;
  image: string;
  types: string[];
  abilities: string[];
}

const PokemonCard: React.FC<PokemonProps> = ({ id, name, height, weight, image, types, abilities }) => {
  const dispatch = useDispatch();

  const handleAddPokemon = () => {
    const pokemonData: Pokemon = {
      id,
      name,
      height,
      weight,
      sprites: { front_default: image },
      types: types.map((type) => ({ type: { name: type } })),
      abilities: abilities.map((ability) => ({ ability: { name: ability } })),
    };

    dispatch(addPokemon(pokemonData));

    // 🚀 Tampilkan toast setelah Pokémon ditambahkan
    dispatch(
      showToast({
        message: `${name} added to your collection!`,
        variant: "success",
      })
    );
  };

  return (
    <div className="border p-4 rounded shadow-md bg-white flex flex-col items-center">
      <img src={image} alt={name} className="w-24 h-24 object-contain" />
      <h2 className="text-lg font-bold capitalize">{name}</h2>
      <p className="text-sm text-gray-500">
        Height: {height} | Weight: {weight}
      </p>
      <button onClick={handleAddPokemon} className="mt-2 bg-blue-500 text-white px-3 py-1 rounded w-full hover:bg-blue-600">
        Add Pokémon
      </button>
    </div>
  );
};

export default PokemonCard;
