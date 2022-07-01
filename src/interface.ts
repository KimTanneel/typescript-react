export interface TodoType {
  id: string;
  name: string;
  priority: "High" | "Low" | "Medium";
  completed: boolean;
}
export interface FilterType {
  keySearch: string;
  status: "All" | "Completed" | "Todo";
  priorities: TodoType["priority"][];
}
export interface User {
  id: string;
  name: string;
}
export interface Pokemon {
  id: number;
  name: string;
  sprites: {
    front_default: string;
  };
  description: string;
}
export interface PokeInfo {
  name: string;
  url: string;
}
export interface Pokemons {
  count: number;
  next: string;
  previous: string;
  results: PokeInfo[];
}
export interface PokeResponse {
  pokemons:Pokemon[],
  count:number,
  next:string,
  previous:string
}
