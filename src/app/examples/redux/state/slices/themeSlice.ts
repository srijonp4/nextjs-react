import { createSlice } from '@reduxjs/toolkit';

interface themeSlice {
  theme: 'dark' | 'light';
}

const initialState: themeSlice = {
  theme: 'dark',
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: (state) => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
    },
  },
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
