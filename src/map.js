import { createSlice } from "@reduxjs/toolkit";
import { SIZE_IJ_ARRAY } from "./consts";
import { getValueMap } from "./utils";

export const INITIAL_STATE = getValueMap(SIZE_IJ_ARRAY, 0);

export const counterSlice = createSlice({
  name: "map",
  initialState: INITIAL_STATE,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default counterSlice.reducer;
