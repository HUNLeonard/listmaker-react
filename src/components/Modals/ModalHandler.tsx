import AddTaskModal from "./AddTaskModal";
import EditTaskModal from "./EditTaskModal";
import useIsModalOpenStore from "../../stores/modal/store";
import AddColumnModal from "./AddColumnModal";
import EditColumnModal from "./EditColumnModal";

const ModalHandler = () => {
  const isAddTaskModalOpen = useIsModalOpenStore((store) => store.isAddTaskModalOpen);
  const isEditTaskModalOpen = useIsModalOpenStore((store) => store.isEditTaskModalOpen);
  const isAddColumModalOpen = useIsModalOpenStore((store) => store.isAddColumModalOpen);
  const isEditColumModalOpen = useIsModalOpenStore((store) => store.isEditColumModalOpen);

  return (
    <>
      {(isAddTaskModalOpen && !isEditTaskModalOpen && !isAddColumModalOpen && !isEditColumModalOpen) && <AddTaskModal />}
      {(!isAddTaskModalOpen && isEditTaskModalOpen && !isAddColumModalOpen && !isEditColumModalOpen) && <EditTaskModal />}
      {(!isAddTaskModalOpen && !isEditTaskModalOpen && isAddColumModalOpen && !isEditColumModalOpen) && <AddColumnModal />}
      {(!isAddTaskModalOpen && !isEditTaskModalOpen && !isAddColumModalOpen && isEditColumModalOpen) && <EditColumnModal />}
    </>
  )
}

export default ModalHandler