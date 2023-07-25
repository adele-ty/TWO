import {createSlice} from '@reduxjs/toolkit';

export const Read = createSlice({
  name: 'read',
  initialState: {
    value: [],
  },
  reducers: {
    initReadList: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

export const {initReadList} = Read.actions;

export default Read.reducer;
