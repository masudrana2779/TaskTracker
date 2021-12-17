import {FaTimes,FaPencilAlt} from 'react-icons/fa';

const Task =({task,onDelete,onToggle,onEdit}) => {

    return (
        <div className={task.remainder ? 'task reminder': 'task'} onDoubleClick={()=>onToggle(task.id)}>
            <h3>{task.text} <FaTimes color={'red'} onClick={()=>onDelete(task.id)} /> </h3>
            <p>{task.day}</p>
        </div>
    )
}
export default Task;