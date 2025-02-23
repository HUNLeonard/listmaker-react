import useIsModalOpenStore from '../../stores/modal/store';
import { buttonType } from '../../types/buttonType';
import { Status } from '../../types/status';
import Button from './Button';

interface ModalOpenProp {
  children?: React.ReactNode,
  status?: Status,
  modalType: "AddTask" | "EditTask" | "AddColum" | "EditColumn",
  type?: buttonType,
  className?: string
  execute?: (() => void)
}

const ModalOpenButton = ({ children, status, modalType, type, className, execute }: ModalOpenProp) => {
  const setIsAddTaskModalOpen = useIsModalOpenStore(store => store.setIsAddTaskModalOpen);
  const setIsEditTaskModalOpen = useIsModalOpenStore(store => store.setIsEditTaskModalOpen);
  const setIsAddColumModalOpen = useIsModalOpenStore(store => store.setIsAddColumModalOpen);
  const setIsEditColumModalOpen = useIsModalOpenStore(store => store.setIsEditColumModalOpen);
  const setModalBaseStatus = useIsModalOpenStore(store => store.setModalBaseStatus);

  const handleOpenModal = () => {
    if (modalType === "AddTask") {
      setIsAddTaskModalOpen(true);
      setModalBaseStatus(status ?? null)
    } else if (modalType === "EditTask") {
      setIsEditTaskModalOpen(true);
    } else if (modalType === "AddColum") {
      setIsAddColumModalOpen(true);
    } else if (modalType === "EditColumn") {
      setIsEditColumModalOpen(true);
    }
    if (execute) {
      execute();
    }
  }

  return (
    <Button type={type} execute={handleOpenModal} className={className}>
      {children}
    </Button>
  )
}

export default ModalOpenButton