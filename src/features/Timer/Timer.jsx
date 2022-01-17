// import { store } from "../../app/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, inputSeconds } from "./timerSlice";
import "./Timer.css"
import { useState } from "react";

export function Timer(){
    const dispatch = useDispatch();
    const secondCount = useSelector((state) => state.timer.seconds)
    const minuteCount = useSelector((state) => state.timer.minutes)
    const hourCount = useSelector((state) => state.timer.hours)
    const dayCount = useSelector((state) => state.timer.days)
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
        <section>
            <p>{dayCount}</p>
            <p><small>Days</small></p>
        </section>
        <section>
            <p>{hourCount}</p>
            <p><small>Hours</small></p>
        </section>
        <section>
            <p>{minuteCount}</p>
            <p><small>Minutes</small></p>
        </section>
        <section>
            <p>{secondCount}</p>
            <p><small>Seconds</small></p>
        </section>
        



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