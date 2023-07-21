import {configureStore} from '@reduxjs/toolkit';
import todayContentReducer from './todayContent';

const store = configureStore({
  reducer: {
    todayContent: todayContentReducer,
  },
});

export default store;
