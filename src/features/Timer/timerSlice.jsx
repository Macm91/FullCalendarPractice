import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // days: 0,
    // hours: 0,
    // minutes: 0,
    seconds: 60,
};

export const timerSlice = createSlice({
    name: "timer",
    initialState,
    reducers: {
        decrement(state){
            state.vallue--;
        },
        // addTime(state, action){
            
        // }
    }
})

export const {decrement} = timerSlice.actions;

export default timerSlice.reducer;
