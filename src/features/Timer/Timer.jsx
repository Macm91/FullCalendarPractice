import { store } from "../../app/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./timerSlice";
import "./Timer.css"

export function Timer(){
    const dispatch = useDispatch();
    const count = useSelector((state) => state.timer.value)

    function handleDecrement(){
        dispatch(decrement());
    }

    function handleIncrement(){
        dispatch(decrement());
    }

return(
    <div>
       <h1>{count}</h1>
       <button onClick={()=> handleDecrement()}>
           Decrease 
        </button>

        <button onClick={()=> handleIncrement()}>
           Increase
        </button>

    </div>
)
}

export default Timer;