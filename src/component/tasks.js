import Task from "./task";

const Tasks = ({tasks,onDelete,onToggle, onEdit}) => {
    return (
        <>
            {
                tasks.map((task, i) => (
                    <Task task={task} key={i} onDelete={onDelete} onToggle={onToggle} onEdit={onEdit} />
                ))
            }
        </>
    )
}
export default Tasks;