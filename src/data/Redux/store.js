import {configureStore} from '@reduxjs/toolkit';
import todayContentReducer from './todayContent';
import readReducer from './Read';

const store = configureStore({
  reducer: {
    todayContent: todayContentReducer,
    read: readReducer,
  },
});

export default store;
