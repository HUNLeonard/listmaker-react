import { useColumsStore } from "../../stores/colums/store";
import { Status } from "../../types/status";


interface SelectorProps {
  value: Status["id"] | undefined;
  setter: (arg: Status["id"]) => void;
}

const StatusSelector = ({ value, setter }: SelectorProps) => {
  const colums = useColumsStore(store => store.colums)

  return (
    <select
      name="status"
      className="bg-gray-light hover:bg-gray-light/90 my-2 p-2"
      value={value}
      onChange={e => setter(e.target.value)}
    >
      {
        colums.map((status) =>
          <option value={status.id} key={status.id}>{status.name}</option>
        )
      }
    </select>
  )
}

export default StatusSelector