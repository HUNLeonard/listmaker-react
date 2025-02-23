import { create } from "zustand";
import { Status } from "../../types/status";

interface ModalStoreState {
  isAddTaskModalOpen: boolean;
  setIsAddTaskModalOpen: (newIsModalOpen: boolean) => void;

  isEditTaskModalOpen: boolean;
  setIsEditTaskModalOpen: (newIsModalOpen: boolean) => void;

  modalBaseStatus: Status | null;
  setModalBaseStatus: (openModalStatus: Status | null) => void;

  isAddColumModalOpen: boolean;
  setIsAddColumModalOpen: (newIsModalOpen: boolean) => void;

  isEditColumModalOpen: boolean;
  setIsEditColumModalOpen: (newIsModalOpen: boolean) => void;
}
//const [modalBaseStatus, setModalBaseStatus] = useState<Status>("PLANNED");
const useModalStore = create<ModalStoreState>((set) => ({
  isAddTaskModalOpen: false,
  isEditTaskModalOpen: false,
  isAddColumModalOpen: false,
  isEditColumModalOpen: false,
  modalBaseStatus: null,
  setIsAddTaskModalOpen: (newIsAddTaskModalOpen) =>
    set({ isAddTaskModalOpen: newIsAddTaskModalOpen }),
  setIsEditTaskModalOpen: (newIsEditTaskModalOpen) =>
    set({ isEditTaskModalOpen: newIsEditTaskModalOpen }),
  setModalBaseStatus: (openModalStatus) =>
    set({ modalBaseStatus: openModalStatus }),
  setIsAddColumModalOpen: (newIsAddColumModalOpen) =>
    set({ isAddColumModalOpen: newIsAddColumModalOpen }),
  setIsEditColumModalOpen: (newIsEditColumModalOpen) =>
    set({ isEditColumModalOpen: newIsEditColumModalOpen }),
}));

export default useModalStore;
