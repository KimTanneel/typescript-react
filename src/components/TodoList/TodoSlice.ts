import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "todoList",
  initialState: [
    { id: "1", name: "Task 1", completed: true, priority: "High" },
    { id: "2", name: "Task 2", completed: false, priority: "Medium" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
  },
});
