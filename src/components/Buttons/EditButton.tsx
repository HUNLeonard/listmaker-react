import { TaskProp, useTaskStore } from "../../stores/tasks/store";
import ModalOpenButton from "./ModalOpenButton";


const EditButton = ({ task }: { task: TaskProp | undefined }) => {
  const setEditableTask = useTaskStore(store => store.setEditableTask);

  return (
    <ModalOpenButton modalType="EditTask" execute={() => { setEditableTask(task ?? null) }} type="secondary" >...</ModalOpenButton>
  )
}

export default EditButton