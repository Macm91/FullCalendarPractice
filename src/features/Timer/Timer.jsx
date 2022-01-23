// import { store } from "../../app/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset, inputSeconds } from "./timerSlice";
import "./Timer.css"
import { useState } from "react";
import SimplePicker from 'simplepicker';
import { useFetchExercisesQuery } from "../Exercises/exercisesApiSlice";

export function Timer(){
    const dispatch = useDispatch();
    const secondCount = useSelector((state) => state.timer.seconds)
    const minuteCount = useSelector((state) => state.timer.minutes)
    const hourCount = useSelector((state) => state.timer.hours)
    const dayCount = useSelector((state) => state.timer.days)
    const [seconds, setSeconds] = useState ()
    const SimplePicker = require('simplepicker')

    const { data = []} = useFetchExercisesQuery();


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
    <div className="timerPage">
        <div className="timerContainer">
        <div  className="TimerCountdown">
        <section>
            <p>{dayCount}</p>
            <p><small>Days</small></p>
        </section>
        <span> : </span>
        <section>
            <p>{hourCount}</p>
            <p><small>Hours</small></p>
        </section>
        <span> : </span>
        <section>
            <p>{minuteCount}</p>
            <p><small>Minutes</small></p>
        </section>
        <span> : </span>
        <section>
            <p>{secondCount}</p>
            <p><small>Seconds</small></p>
        </section>
        </div>
        </div>
       


      <div className="buttons">
        <span>
            <button className="decrease" onClick={()=> handleDecrement()}>
                <svg  xmlns="http://www.w3.org/2000/svg" className="decrease" viewBox="0 0 16 16">
                <path d="M5.5 8a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5z"/>
                <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H4zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
                </svg> 
            </button>
            <button className="increaseTime" onClick={()=> handleIncrement()}>
                <svg xmlns="http://www.w3.org/2000/svg"  className="increaseTime"  viewBox="0 0 16 16">
                <path d="M8.5 6a.5.5 0 0 0-1 0v1.5H6a.5.5 0 0 0 0 1h1.5V10a.5.5 0 0 0 1 0V8.5H10a.5.5 0 0 0 0-1H8.5V6z"/>
                <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2zm10-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1z"/>
                </svg>
            </button>
            <button className="reset" onClick={() => handleReset()}>
                Reset
            </button>
        </span>

        <h3> Or input time in seconds below</h3>        
        <form onSubmit={(e) => secondsSet(e)}>
        <input type="number" value={seconds} onChange={(e) => setSeconds(e.target.value)} />
        <input type="submit"/>
        </form>
       


      </div>
<div>
<p>Exercises List:</p>

<table>
    <thead>
        <tr>
            <th>Name</th>
            <th>Body Part</th>
            <th> Equipment</th>
        </tr>
    </thead>
    <tbody>
        {data.map((exercise) => (
            <tr key={exercise.id}>
                <td>{exercise.name}</td>
                <td>{exercise.body_part}</td>
                <td>{exercise.equipment}</td>
            </tr>
        ))}
    </tbody>
</table>
</div>

    </div>
)
}

export default Timer;