import { createSlice } from "@reduxjs/toolkit";

const initialState = {
   value: 60
};

export const timerSlice = createSlice({
    name: "Timer",
    initialState,
    reducers: {
        decrement(state) {
            if (state !== 0){
                state.value --;
            }
        },
        increment(state){
            state.value ++;
        }
    }
})

export const {decrement, increment} = timerSlice.actions;

export default timerSlice.reducer;
