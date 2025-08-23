import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  result: 0,
};

export const calcSlice = createSlice({
  name: "calc",
  initialState: initialState,
  reducers: {
    sum: (currntState, action) => {
      const sum =
        Number(action.payload.firstNumber) +
        Number(action.payload.secondNumber);
      currntState.result = sum;
    },
    sub: (currntState, action) => {
      const sub =
        Number(action.payload.firstNumber) -
        Number(action.payload.secondNumber);
      currntState.result = sub;
    },
    mul: (currntState, action) => {
      const mul =
        Number(action.payload.firstNumber) *
        Number(action.payload.secondNumber);
      currntState.result = mul;
    },
    div: (currntState, action) => {
      const div =
        Number(action.payload.firstNumber) /
        Number(action.payload.secondNumber);
      currntState.result = div;
    },
  },
});

export const { sum, sub, mul, div } = calcSlice.actions;

export default calcSlice.reducer;
