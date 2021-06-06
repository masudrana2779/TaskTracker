import {useState} from "react";
import './App.css';
import Header from "./component/heaeder/Header";
import Tasks from "./component/tasks";
import AddTask from "./component/addTask";


function App() {
    const [showAddTask, setShowAddTask] = useState(false);

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

    // Add task
    const addTask = (task) => {
        const id = Math.floor(Math.random() * 1000) + 1;
        const newTask = {id, ...task}
        setTask([...tasks, newTask]);
    }

    // Delete Task
    const deleteTask = (id) => {
        setTask(tasks.filter((task) => task.id !== id));
    }

    // Toggle Remainder
    const toggleRemainder = (id) => {
        setTask(tasks.map((task) => task.id === id ? {...task, remainder: !task.remainder} : task));
    }

    return (
        <div className="container">
            <Header title={'Task Tracker'} onAdd={()=>setShowAddTask(!showAddTask)} showAdd={showAddTask} />
            {showAddTask && <AddTask onAdd={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder}/> :
                <p>No task</p>}
        </div>
    );
}

export default App;
