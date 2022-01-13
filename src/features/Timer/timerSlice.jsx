import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: 1,
   status: 'paused',
   decrement_interval: 0
};

export const timerSlice = createSlice({
    name: "Timer",
    initialState,
    reducers: {
        decrement(state) {
            if (state.value !== 0){
                state.value -= 1;
            }
        },
        increment(state){
            state.value += 1;
        },
        reset(state) {
            if (state.value !== 0){
                state.value = 0
            }
            //currently immediately resets to zero. I want it to show the 
            //numbers as it decreases
        },
    }
})

export const {decrement, increment, reset} = timerSlice.actions;

export default timerSlice.reducer;
