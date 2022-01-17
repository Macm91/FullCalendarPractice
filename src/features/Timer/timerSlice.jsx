import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
};

export const timerSlice = createSlice({
    name: "Timer",
    initialState,
    reducers: {
        decrement(state) {
            if (state.seconds !== 0){
                state.seconds -= 1;
            }
        },
        increment(state){
            state.seconds += 1;
        },
        reset(state) {
            if (state.value !== 0){
                state.seconds = 0;
                state.minutes =0;
                state.hours =0;
                state.days = 0;
            }
        },
        inputSeconds(state, action){
            state.seconds = action.payload;
        }
    }
})

export const {decrement, increment, reset, inputSeconds} = timerSlice.actions;

export default timerSlice.reducer;
