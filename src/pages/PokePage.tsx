import { useState } from "react";
import { useIsFetching, useQuery } from "react-query";
import { fetchPokeList } from "../api/pokemonApi";
import { CreatePokemonForm } from "../components/CreatePokemonForm";
import { PokemonList } from "../components/PokemonList/PokemonList";
import { PokeResponse } from "../interface";

export const PokePage = () => {
  const [urlPokemon, setUrlPokemon] = useState('pokemon')
  const { data } = useQuery<PokeResponse>(["pokemons",urlPokemon],()=> fetchPokeList(urlPokemon), { keepPreviousData : true });
  // const pokemons ={...data}
  // const pokemons ={}
  const isFetching = useIsFetching();



  // page =0 ,
  // page =1 , next(page 0)
  const pokemons:PokeResponse = {
    pokemons: [
      {
        id: 1,
        name: "Pikachu",
        sprites: { front_default: "12412512" },
        description: "124124",
      },
    ],
    count: 1113,
    next: "heeeeee",
    previous: "string",
  };
  return (
    <div className="poke-page">
      {data && <PokemonList setUrlPokemon={setUrlPokemon} pokemonResponse={data}></PokemonList>}
      <CreatePokemonForm />
    </div>
  );
};
