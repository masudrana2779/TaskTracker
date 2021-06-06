import Task from "./task";

const Tasks = ({tasks,onDelete,onToggle}) => {
    return (
        <>
            {
                tasks.map((task, i) => (
                    <Task task={task} key={i} onDelete={onDelete} onToggle={onToggle} />
                ))
            }
        </>
    )
}
export default Tasks;