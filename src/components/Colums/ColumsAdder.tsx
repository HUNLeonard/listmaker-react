import { cn } from '../../utils/cn'
import ModalOpenButton from '../Buttons/ModalOpenButton';

const ColumsAdder = () => {
  return (
    <div
      className={cn('bg-gray-dark min-h-92 w-[300px] mx-2 mt-2 rounded-md p-2',
        "font-bold flex text-white group hover:p-4 transition-all cursor-pointer")}
    >
      <ModalOpenButton modalType="AddColum" type="" className='w-full'>
        <div className={cn('border-2 border-white rounded-md h-full flex items-center justify-center',
          "text-9xl group-hover:text-8xl transition-all select-none")}>
          +
        </div>
      </ModalOpenButton>
    </div>

  )
}

export default ColumsAdder