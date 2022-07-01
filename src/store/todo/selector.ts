import {
  getFilterPriorities,
  getFilterSearchText,
  getFilterStatus,
} from "../filter/selector";
import { RootState } from "../types";
import { createSelector } from "@reduxjs/toolkit";

export const getTodoList = (state: RootState) => state.todo.todos;

// export const getFilterTodoList = (state: RootState) =>
//   state.todoList.filter((todo) => {
//     const searchText = getFilterSearchText(state);
//     console.log('search text',searchText);

//     return todo.name.includes("T");
// });

// status = all -> trả hết
// status = complted => completed
export const getFilterTodoList = createSelector(
  getTodoList,
  getFilterSearchText,
  getFilterStatus,
  getFilterPriorities,
  (todos, textSearch, status, priorities) => {
    console.log("zooooo");
    if (status === "All") {
      console.log("order", priorities);
      return todos.filter(
        (todo) =>
          todo.name.includes(textSearch) &&
          (priorities.length ? priorities.includes(todo.priority) : true)
      );
    }
    return todos.filter(
      (todo) =>
        todo.name.includes(textSearch) &&
        todo.completed === (status === "Completed" ? true : false) &&
        (priorities.length ? priorities.includes(todo.priority) : true)
    );
  }
);
