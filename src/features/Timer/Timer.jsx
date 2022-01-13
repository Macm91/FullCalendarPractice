import { store } from "../../app/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, inputSeconds } from "./timerSlice";
import "./Timer.css"
import { useState } from "react";

export function Timer(){
    const dispatch = useDispatch();
    const count = useSelector((state) => state.timer.value)
    const [seconds, setSeconds] = useState (0)

    function handleDecrement(){
        dispatch(decrement());
    }

    function handleIncrement(){
        dispatch(increment());
    }

    function handleReset(){
        dispatch(reset());
    }

    function secondsSet(){
        dispatch(inputSeconds(seconds))
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

        <span>
            <button onClick={() => handleReset()}>
                Reset
            </button>
        </span>
        
        <h1> Or input time in seconds below</h1>

        {/* <form onSubmit={(event) => secondsSet(event)}> */}
        <form onSubmit={(event) => secondsSet(event)}>
        <input type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)}/>
        <input type="submit" value="Submit"></input>
        </form>
    </div>
)
}

export default Timer;