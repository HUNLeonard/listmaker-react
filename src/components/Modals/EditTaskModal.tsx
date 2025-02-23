import { useState } from "react";
import { TaskProp, useTaskStore } from "../../stores/tasks/store";
import useIsModalOpenStore from "../../stores/modal/store";
import { Status } from "../../types/status";

import SubmitButton from "../Buttons/SubmitButton";
import StatusSelector from "../other/StatusSelector";
import Input from "../other/Input";
import ModalWrapper from "./ModalWrapper";
import ModalHeader from "./ModalHeader";
import InputTitle from "../other/InputTitle";

const EditTaskModal = () => {
  const updateTask = useTaskStore(store => store.updateTask);
  const setIsEditTaskModalOpen = useIsModalOpenStore(store => store.setIsEditTaskModalOpen)
  const setEditableTask = useTaskStore(store => store.setEditableTask)
  const editableTask = useTaskStore(store => store.editableTask)

  const [taskTitle, setTaskTitle] = useState<string>(editableTask?.title ?? "");
  const [selectedValue, setSelectedValue] = useState<Status["id"]>(editableTask?.status ?? "")

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    updateTask({ id: editableTask?.id, title: taskTitle, status: selectedValue } as TaskProp);
    resetModal();
  };

  const resetModal = () => {
    setIsEditTaskModalOpen(false);
    setEditableTask(null);
  }

  return (
    <ModalWrapper execute={handleAddTask}>
      <ModalHeader title="Task - Edit" execute={resetModal} />


      <InputTitle text="Title" />
      <Input value={taskTitle} setter={setTaskTitle} placeholder="Task title..." />

      <InputTitle text="Status" />
      <StatusSelector value={selectedValue} setter={setSelectedValue} />


      <SubmitButton text="Edit task" />
    </ModalWrapper>
  );
};

export default EditTaskModal;
