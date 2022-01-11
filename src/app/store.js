import { configureStore } from '@reduxjs/toolkit';
import timerReducer from "../features/Timer/timerSlice"


export const store = configureStore({
  reducer: {
    timer : timerReducer
  },
});
