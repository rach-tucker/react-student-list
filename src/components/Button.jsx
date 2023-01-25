import React from 'react';
import StudentDisplay from "./StudentsDisplay";

export default function Button(props) {

    return (
        <button onClick={StudentDisplay}>Students</button>
    )
}