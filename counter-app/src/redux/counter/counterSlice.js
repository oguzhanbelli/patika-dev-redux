import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    //Actions
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      console.log(action);
      state.value += Number(action.payload);
    },
  },
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions; //Dışa aktarılması gerekiyor.
export default counterSlice.reducer;
