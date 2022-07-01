import React from "react";
import { Filter } from "../components/Filter";
import { TodoList } from "../components/TodoList";


export const TodoPage = () => {
  return (
    <div className="todo-page">
      <Filter></Filter>
      <TodoList></TodoList>
    </div>
  ) 
};
