import {Link} from "react-router-dom";
import React from "react";

export function Nativation(){

return(

<div>
    <Link className="link" to="/exerciseList">Exercises</Link>
    <Link className="link" to="/timer">Timer</Link>
</div>

)
};

export default Nativation;