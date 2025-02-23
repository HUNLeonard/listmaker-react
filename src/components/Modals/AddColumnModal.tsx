import { useState } from 'react';
import { useColumsStore } from '../../stores/colums/store';
import useModalStore from '../../stores/modal/store'
import ModalHeader from './ModalHeader';
import ModalWrapper from './ModalWrapper'
import { Status } from '../../types/status';
import SubmitButton from '../Buttons/SubmitButton';
import Input from '../other/Input';
import InputTitle from '../other/InputTitle';
// import StatusSelector from '../other/StatusSelector';
// import InputHint from '../other/InputHint';
import { StatusColor, useStatusColorStore } from '../../stores/statusColor/store';


const AddColumnModal = () => {
  const setIsAddColumModalOpen = useModalStore(store => store.setIsAddColumModalOpen);

  const addColum = useColumsStore(store => store.addColum);
  const addColumnColor = useStatusColorStore(store => store.addColumnColor)


  const [columName, setColumName] = useState<Status["name"]>("");
  const [bgColorValue, setBgColorValue] = useState<StatusColor["bgcolor"]>("#000000");
  const [textColorValue, setTextColorValue] = useState<StatusColor["textcolor"]>("#FFFFFF");

  const handleAddColum = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const columnId = addColum(columName);
    addColumnColor({ statusId: columnId, bgcolor: bgColorValue, textcolor: textColorValue })
    resetModal();
  };

  const resetModal = () => {
    setIsAddColumModalOpen(false);
    setColumName("");
  }

  return (
    <ModalWrapper execute={handleAddColum}>

      <ModalHeader title="Column - Add" execute={resetModal} />

      <InputTitle text="Name" />
      <Input value={columName} setter={setColumName} placeholder='Add new column...' />

      <InputTitle text="Status Background color" />
      <input type="color" name="bgColor" value={bgColorValue} onChange={e => setBgColorValue(e.target.value as StatusColor["bgcolor"])} />

      <InputTitle text="Status Text color" />
      <input type="color" name="textColor" value={textColorValue} onChange={e => setTextColorValue(e.target.value as StatusColor["bgcolor"])} />


      <SubmitButton text="Add Column" style={{ backgroundColor: bgColorValue, color: textColorValue }} />
    </ModalWrapper>
  )
}

export default AddColumnModal