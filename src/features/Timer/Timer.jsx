// import { store } from "../../app/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, inputSeconds } from "./timerSlice";
import "./Timer.css"
import { useState } from "react";

export function Timer(){
    const dispatch = useDispatch();
    const count = useSelector((state) => state.timer.value)
    const [seconds, setSeconds] = useState ()


    function handleDecrement(){
        dispatch(decrement());
    }

    function handleIncrement(){
        dispatch(increment());
    }

    function handleReset(){
        dispatch(reset());
    }

    function secondsSet(e){
        e.preventDefault();
        dispatch(inputSeconds(Number(seconds)))
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

        
        <form onSubmit={(e) => secondsSet(e)}>
        <input type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)} />
        <input type="submit"/>
        </form>
    </div>
)
}

export default Timer;