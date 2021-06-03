import React, {useState} from "react";

const Loding = () => {
    const [loding, setLoading] = useState(true);
    const getData = () => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(response => response.json())
            .then(json => {
                console.log(json);
                setLoading(false);
            })
    }
    return (
        <div>
            {getData()}
            <div>{loding ? <p>loading ....</p> : <p>done</p>}</div>
        </div>
    )
}
export default Loding;