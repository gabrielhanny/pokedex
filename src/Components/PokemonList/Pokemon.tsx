import React from "react";

type PokemonProps = {
  id: number;
  name: string;
  height: number;
  weight: number;
  image: string;
  types: string[];
  abilities: string[];
};

export const Pokemon: React.FC<PokemonProps> = ({ name, height, weight, image, types, abilities }) => {
  return (
    <div className="w-[220px] h-[280px] border rounded-lg shadow-md p-3 bg-white flex flex-col items-center text-center">
      {/* Gambar Pokémon */}
      <div className="w-20 h-20 flex items-center justify-center">
        <img src={image} alt={name} className="w-full h-full object-contain" />
      </div>

      {/* Nama Pokémon */}
      <h2 className="text-md font-bold capitalize mt-1 leading-tight">{name}</h2>

      {/* Status Height & Weight */}
      <p className="text-xs text-gray-600">Height: {height}</p>
      <p className="text-xs text-gray-600">Weight: {weight}</p>

      {/* Types */}
      <div className="mt-1 w-full">
        <h3 className="font-semibold text-xs">Types:</h3>
        <ul className="flex justify-center gap-1 flex-wrap">
          {types.map((type, index) => (
            <li key={index} className="px-1 py-0.5 bg-gray-200 rounded text-xs">
              {type}
            </li>
          ))}
        </ul>
      </div>

      {/* Abilities */}
      <div className="mt-1 w-full">
        <h3 className="font-semibold text-xs">Abilities:</h3>
        <ul className="flex justify-center gap-1 flex-wrap">
          {abilities.map((ability, index) => (
            <li key={index} className="px-1 py-0.5 bg-blue-200 rounded text-xs">
              {ability}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
