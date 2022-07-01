import { createSlice } from "@reduxjs/toolkit";
import { todoStore } from "./types";

export const initialState: todoStore = {
  todos: [
    { id: "1", name: "Task 1", completed: true, priority: "High" },
    { id: "2", name: "Task 2", completed: true, priority: "Low" },
    { id: "3", name: "Task 3", completed: false, priority: "Medium" },
  ],
};

const slice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    changeToggle: (state, action) => {
      const selectedTodo = state.todos.find(
        (todo) => todo.id === action.payload
      );
      if (selectedTodo) {
        selectedTodo.completed = !selectedTodo.completed;
      }
    },
    removeTaskDone: (state, action) => {
      state.todos = state.todos.filter((todo) => !todo.completed);
    },
  },
});

export const { reducer } = slice;

export const { addTodo, changeToggle, removeTaskDone } = slice.actions;
