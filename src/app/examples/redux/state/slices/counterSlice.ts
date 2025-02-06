import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
// initial state type
interface CounterState {
  value: number;
}
// initial state
const initialState: CounterState = {
  value: 0,
};
// create the slice
const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    decrementByAmount: (state, action: PayloadAction<number>) => {
      state.value -= action.payload;
    },
  },
});

export const { increment, decrement, decrementByAmount, reset } =
  counterSlice.actions;
export default counterSlice.reducer;
