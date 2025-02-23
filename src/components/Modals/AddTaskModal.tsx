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

const AddTaskModal = () => {
  const addTask = useTaskStore(store => store.addTask);
  const setIsAddTaskModalOpen = useIsModalOpenStore(store => store.setIsAddTaskModalOpen)
  const modalBaseStatus = useIsModalOpenStore(store => store.modalBaseStatus)

  const [taskTitle, setTaskTitle] = useState<string>("");
  const [selectedValue, setSelectedValue] = useState<Status["id"]>(modalBaseStatus?.id ?? "")

  const handleAddTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask({ title: taskTitle, status: selectedValue } as TaskProp);
    resetModal();
  };

  const resetModal = () => {
    setTaskTitle("");
    setIsAddTaskModalOpen(false);
  }

  return (
    <ModalWrapper execute={handleAddTask}>
      <ModalHeader title="Task - Add" execute={resetModal} />

      <InputTitle text="Title" />
      <Input value={taskTitle} setter={setTaskTitle} placeholder="Task title..." />

      <InputTitle text="Status" />
      <StatusSelector value={selectedValue} setter={setSelectedValue} />

      <SubmitButton text="Add task" />
    </ModalWrapper>
  );
};

export default AddTaskModal;
