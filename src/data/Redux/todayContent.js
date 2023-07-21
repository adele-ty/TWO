import {createSlice} from '@reduxjs/toolkit';

export const todayContent = createSlice({
  name: 'todayContent',
  initialState: {
    value: [],
  },
  reducers: {
    initList: (state, action) => {
      state.value = [...action.payload];
    },
  },
});

export const {initList} = todayContent.actions;

export default todayContent.reducer;
