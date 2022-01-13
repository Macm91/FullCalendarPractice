import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: 1
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
        }
    }
})

export const {decrement, increment} = timerSlice.actions;

export default timerSlice.reducer;
