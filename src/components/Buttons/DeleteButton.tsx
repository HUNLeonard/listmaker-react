import { TaskProp, useTaskStore } from "../../stores/tasks/store";
import Button from "./Button";


const DeleteButton = ({ id }: { id: TaskProp["id"] }) => {
  const deleteTask = useTaskStore(store => store.deleteTask);

  return (
    <Button type="secondary" className="hover:!text-red-500" execute={() => deleteTask(id)}>X</Button>
  )
}

export default DeleteButton