import { combineReducers } from "redux";
import { reducer as todo } from "./todo";
import { reducer as filter } from "./filter";
const reducers = {
  todo,
  filter,
};

export const appReducer = combineReducers(reducers);
