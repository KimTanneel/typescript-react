import axios from "axios";
import { PokeInfo, Pokemon, Pokemons, PokeResponse } from "../interface";
// const apiClient = axios.create({
//   baseURL: "http://172.16.5.192:3001/",
//   headers: {
//     "Content-type": "application/json",
//   },
// });
const apiClient = axios.create({
    baseURL: "https://pokeapi.co/api/v2/",
    headers: {
      "Content-type": "application/json",
    },
  });
export const fetchPokeList = async (urlPokemon:string):Promise<PokeResponse> => {
  const {data} = await apiClient.get(urlPokemon);
  const { count, next, previous, results } = data;
  const PromisePkms = results.map(async (poke : PokeInfo) => {
    const {data} =  await apiClient.get(`/pokemon/${poke.name}`)
    return data
  })
  const pokemons = await Promise.all(PromisePkms);
  console.log('1111111');
  
  const pokemonData:PokeResponse = {
    pokemons,
    count,
    next:next ?next.slice(25):next,
    previous:previous ?previous.slice(25):previous,
  };
  console.log('Return Data',pokemonData);
  
  return pokemonData;
};

export const createPokeList = async (data: Pokemon) => {
  const response = await apiClient.post<Pokemon[]>("/pokemon", data);
  console.log("response", response);
  return response.data;
};
// const UserService = {
//   findAll,
// };
// export default UserService;
