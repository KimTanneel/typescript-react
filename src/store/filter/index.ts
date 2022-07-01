import { createSlice } from "@reduxjs/toolkit";
import { FilterType } from "../../interface";

export const initialState: FilterType = {
  keySearch: "",
  status: "All",
  priorities: [],
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    keySearchChange: (state, action) => {
      state.keySearch = action.payload;
    },
    statusChange: (state, action) => {
      state.status = action.payload;
    },
    prioritiesChange: (state, action) => {
      state.priorities = action.payload;
    },
  },
});

export const { reducer } = slice;

export const { keySearchChange, statusChange, prioritiesChange } =
  slice.actions;
