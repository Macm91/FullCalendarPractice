import { store } from "../../app/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "./timerSlice";

export function Timer(){
    const dispatch = useDispatch();
    const count = useSelector((state) => state.seconds);

    function handleDecrement(){
        dispatch(decrement());
    }


return(
    <div>
        <h1>{count}</h1>
        <button classname="startButton" aria-label="Start Timer" onClick={handleDecrement()}>
        </button>
    </div>
)
}