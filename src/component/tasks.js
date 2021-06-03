import Task from "./task";

const Tasks = ({tasks,onDelete}) => {
    return (
        <>
            {
                tasks.map((task, i) => (
                    <Task task={task} key={task.id} onDelete={onDelete} />
                ))
            }
        </>
    )
}
export default Tasks;