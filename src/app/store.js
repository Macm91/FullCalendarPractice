import { configureStore } from '@reduxjs/toolkit';
import timerReducer from "../features/Timer/timerSlice";
import { exerciseApiSlice } from '../features/Exercises/exercisesApiSlice';



export const store = configureStore({
  reducer: {
    timer : timerReducer,
    [exerciseApiSlice.reducerPath]: exerciseApiSlice.reducer,
  },

  //MUST add middleware for API slices. use ".concat()" to add extra middleware. no need for a new line 

  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(exerciseApiSlice.middleware);
  }
});
