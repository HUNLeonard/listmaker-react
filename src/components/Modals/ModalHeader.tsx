import CloseModalButton from '../Buttons/CloseModalButton'

interface ModalHeaderProp {
  title?: string,
  execute: () => void;
}

const ModalHeader = ({ title, execute }: ModalHeaderProp) => {
  return (
    <div className="flex flex-row  flex-nowrap justify-between *:text-3xl *:!text-white *:font-bold">
      <h3>{title}</h3>
      <CloseModalButton execute={execute} />
    </div>
  )
}

export default ModalHeader