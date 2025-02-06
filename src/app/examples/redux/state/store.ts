// import { configureStore } from '@reduxjs/toolkit';
// import counterSlice from './slices/counterSlice';

// // create store

// const store = configureStore({
//   reducer: {
//     counter: counterSlice,
//   },
// });

// // types
// export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
// export default store;

import { counterSlice, themeSlice } from '../state/slices';
import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    counter: counterSlice,
    theme: themeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
