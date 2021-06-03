import {useState} from "react";
import './App.css';
import Header from "./component/heaeder/Header";
import Tasks from "./component/tasks";


function App() {

    const [tasks, setTask] = useState([
        {
            id: 1,
            text: "Doctor App",
            day: "Feb 5th at 3:50pm",
            reminder: true
        },
        {
            id: 2,
            text: "School App",
            day: "Feb 6th at 3:50pm",
            reminder: true
        },
        {
            id: 3,
            text: "Home App",
            day: "Feb 8th at 3:50pm",
            reminder: false
        }
    ])

    // Delete Task

    const deleteTask = (id) => {
        console.log('delete', id);
        setTask(tasks.filter( (task) => task.id !== id ));
    }

    return (
        <div className="container">
            <Header title={'Task Tracker'}/>
            <Tasks tasks={tasks} onDelete={deleteTask} />
        </div>
    );
}

export default App;
