import { createSlice } from "@reduxjs/toolkit";
import { SIZE_IJ_ARRAY } from "./consts";
import { getValueMap } from "./utils";

const initialState = getValueMap(SIZE_IJ_ARRAY, 500);

export const counterSlice = createSlice({
  name: "map",
  initialState,
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
