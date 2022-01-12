import { store } from "../../app/store";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decrement } from "./timerSlice";

export function Timer(){
    const dispatch = useDispatch();
    const state = useSelector((state) => state);

    function handleClick(){
        dispatch(decrement());
    }
}

return(
    <div>
        <h1>{secondValue}</h1>
        <button onClick={handleClick()}>
            Start
        </button>
    </div>
)