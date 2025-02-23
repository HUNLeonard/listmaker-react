import { useState } from 'react';
import { useColumsStore } from '../../stores/colums/store';
import useModalStore from '../../stores/modal/store'
import ModalHeader from './ModalHeader';
import ModalWrapper from './ModalWrapper'
import { Status } from '../../types/status';
import SubmitButton from '../Buttons/SubmitButton';
import Input from '../other/Input';
import StatusSelector from '../other/StatusSelector';
import InputTitle from '../other/InputTitle';
import InputHint from '../other/InputHint';
import { StatusColor, useStatusColorStore } from '../../stores/statusColor/store';



const EditColumnModal = () => {
  const setIsEditColumModalOpen = useModalStore(store => store.setIsEditColumModalOpen);
  const movePosition = useColumsStore(store => store.movePosition);
  const editColum = useColumsStore(store => store.editColum);
  const editableColum = useColumsStore(store => store.editableColum)
  const setEditableColum = useColumsStore(store => store.setEditableColum)
  const statusColors = useStatusColorStore(store => store.statusColors)
  const editColumnColor = useStatusColorStore(store => store.editColumnColor)

  const [columName, setColumName] = useState<Status["name"]>(editableColum?.name ?? "");
  const [afterColumn, setAfterColumn] = useState<Status["id"] | undefined>(editableColum?.id);

  const editableStatusColor = statusColors.find(color => color.statusId === editableColum?.id) as StatusColor;
  const editableBgColor = editableStatusColor.bgcolor;
  const editableTextColor = editableStatusColor.textcolor;

  const [bgColorValue, setBgColorValue] = useState<StatusColor["bgcolor"]>(editableBgColor);
  const [textColorValue, setTextColorValue] = useState<StatusColor["textcolor"]>(editableTextColor);

  const handleEditColum = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editableColum) {
      editColum({ id: editableColum?.id, name: columName });
      editColumnColor({ statusId: editableColum?.id, bgcolor: bgColorValue, textcolor: textColorValue })
      resetModal();
    }
  };

  const resetModal = () => {
    setIsEditColumModalOpen(false);
    setColumName(editableColum?.name ?? "");
    setEditableColum(null);
    if (afterColumn && editableColum && afterColumn !== editableColum?.id) {
      movePosition(afterColumn, editableColum)
    }
  }

  return (
    <ModalWrapper execute={handleEditColum}>
      <ModalHeader title="Column - Edit" execute={resetModal} />

      <InputTitle text="Name" />
      <Input value={columName} setter={setColumName} placeholder='Edit column name...' />

      <InputTitle text="Position" />
      <StatusSelector value={afterColumn} setter={setAfterColumn}></StatusSelector>
      <InputHint text="Puts current column, before the selected column" />

      <InputTitle text="Status Background color" />
      <input type="color" name="bgColor" value={bgColorValue} onChange={e => setBgColorValue(e.target.value as StatusColor["bgcolor"])} />

      <InputTitle text="Status Text color" />
      <input type="color" name="textColor" value={textColorValue} onChange={e => setTextColorValue(e.target.value as StatusColor["bgcolor"])} />


      <SubmitButton text="Edit Column" style={{ backgroundColor: bgColorValue, color: textColorValue }} />
    </ModalWrapper>
  )
}

export default EditColumnModal