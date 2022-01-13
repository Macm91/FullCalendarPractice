import { createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";

const initialState = {
   value: 1,
//    status: 'paused',
//    decrement_interval: 0
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
        },
        inputSeconds(state, action){
            debugger
            console.log(action.payload)
            state.value = action.payload;
        }
    }
})

export const {decrement, increment, reset, inputSeconds} = timerSlice.actions;

export default timerSlice.reducer;
