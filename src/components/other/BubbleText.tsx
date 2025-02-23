import { useStatusColorStore } from '../../stores/statusColor/store'
import { Status } from '../../types/status'

const BubbleText = ({ children, columnId = "-1" }: { children: React.ReactNode, columnId?: Status["id"] }) => {

  const statusColors = useStatusColorStore(store => store.statusColors)
  const columnColor = statusColors.find(color => color.statusId === columnId) ?? { bgcolor: "#eeeeee", textcolor: "#000" }

  return (
    <div
      className={`text-sm px-2 py-0.5 rounded-sm truncate max-w-1/2`}
      style={{ backgroundColor: columnColor.bgcolor, color: columnColor.textcolor }}
    >
      {children}
    </div>

  )
}

export default BubbleText