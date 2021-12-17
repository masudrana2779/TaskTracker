import {useEffect, useState} from "react";
import './App.css';
import Header from "./component/heaeder/Header";
import Tasks from "./component/tasks";
import AddTask from "./component/addTask";
import UpdateTask from "./component/editTask";


function App() {
    const [showAddTask, setShowAddTask] = useState(false);
    const [showUpdateTask, setShowUpdatedTask] = useState(false);

    const [tasks, setTask] = useState([])

    useEffect(() => {
        const getTasks = async () => {
            const tasksFromServer = await fetchTasks();
            setTask(tasksFromServer);
        }
        getTasks();
    }, [])

    // Fetch Tasks
    const fetchTasks = async () => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json();
        return data;
    }

    // Fetch Task
    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json();
        return data;
    }

    // Add task
    const addTask = async (task) => {

        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(task),

        })
        const data = await res.json();
        setTask([...tasks, data])

        /*const id = Math.floor(Math.random() * 1000) + 1;
        const newTask = {id, ...task}
        setTask([...tasks, newTask]);*/
    }

    // Delete Task
    const deleteTask = async (id) => {
        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })
        setTask(tasks.filter((task) => task.id !== id));
    }
    // Edit Task
    const editTask = async (id) => {
        console.log(2121)
        setShowUpdatedTask(!showAddTask)
    }

    // Toggle Remainder
    const toggleRemainder = async (id) => {
        const taskToToggle = await fetchTask(id);
        const updTask = {
            ...taskToToggle,
            remainder: !taskToToggle.remainder
        }
        const res = await fetch(`http://localhost:5000/tasks/${id}`,{
            method: 'PUT',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })
        const data = await res.json()
        setTask(tasks.map((task) => task.id === id ? {...task, remainder: data.remainder} : task));
    }

    return (
        <div className="container">
            <Header title={'Task Tracker'} onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
            {showAddTask && <AddTask onAdd={addTask}/>}
            {showUpdateTask && <UpdateTask onAdd={addTask}/>}
            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleRemainder} onEdit={() => setShowUpdatedTask(!showUpdateTask)}/> :
                <p>No task</p>}
        </div>
    );
}

export default App;
