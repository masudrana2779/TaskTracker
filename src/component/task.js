import {FaTimes} from 'react-icons/fa';

const Task =({task,onDelete,onToggle}) => {
    console.log(task)
    return (
        <div className={task.remainder ? 'task reminder': 'task'} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text} <FaTimes color={'red'} onClick={()=>onDelete(task.id)} /> </h3>
            <p>{task.day}</p>
        </div>
    )
}
export default Task;