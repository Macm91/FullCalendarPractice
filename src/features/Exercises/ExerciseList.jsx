import { useFetchExercisesQuery } from "../Exercises/exercisesApiSlice";
import React from "react";

export function ExerciseList(){
const { data = []} = useFetchExercisesQuery();


return(
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
)
}
