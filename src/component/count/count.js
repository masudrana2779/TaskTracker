import React, {useState} from "react";

const Count = () => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter + 1)}>Max</button>
            &nbsp;
            <button onClick={() => setCounter(prev => prev - 1)}>Min</button>
        </div>
    )
}
export default Count;