import ColumsAdder from './ColumsAdder'
import Columns from './Columns'
import { useColumsStore } from '../../stores/colums/store'

const ColumnList = () => {
  const colums = useColumsStore((store) => store.colums)

  return (
    <section
      className="flex flex-row justify-start items-start overflow-auto w-fit m-4 pr-36"
    >
      {colums.map(status => <Columns key={status.id} status={status} />)}
      <ColumsAdder />
    </section>
  )
}

export default ColumnList