import Task from "./task";

const Tasks = ({tasks,onDelete,onToggle}) => {
    return (
        <>
            {
                tasks.map((task, i) => (
                    <Task task={task} key={task.id} onDelete={onDelete} onToggle={onToggle} />
                ))
            }
        </>
    )
}
export default Tasks;