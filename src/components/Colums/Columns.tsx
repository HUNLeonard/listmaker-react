import { useState } from "react";
import { cn } from "../../utils/cn";
import { Status } from "../../types/status";
import { useTaskStore } from "../../stores/tasks/store";
import TaskList from "../Task/TaskList";
import SettingsDropDown from "../other/SettingsDropDown";

const Columns = ({ status }: { status: Status }) => {
  const draggedTask = useTaskStore((store) => store.draggedTask);
  const setDraggedTask = useTaskStore((store) => store.setDraggedTask);
  const moveTask = useTaskStore((store) => store.moveTask);

  const [canDrop, setCanDrop] = useState(false);

  const handleDrop = () => {
    setDraggedTask(null);
    setCanDrop(false);
    if (draggedTask && draggedTask?.status !== status.id) {
      moveTask(draggedTask.id, status.id);
    }
  }
  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (draggedTask?.status !== status.id) {
      setCanDrop(true);
    }
  }
  const handleDragLeaver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setCanDrop(false);
  }

  return (
    <>
      <div
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeaver}
        onDrop={handleDrop}
        className={cn("bg-gray-dark w-[clamp(300px,40vw,500px)] mx-2 mt-2 rounded-md p-2 text-white space-y-2 max-w-96",
          canDrop ? "border-4 border-dashed border-white" : "border-4 border-transparent ")}>
        <div className="flex flex-row justify-between items-center flex-wrap">
          <p className="font-bold w-fit text-2xl truncate max-w-8/10" title={status.name}>{status.name}</p>
          <SettingsDropDown dependencies={{ status }} />

        </div>
        <TaskList statusId={status.id} />
      </div>
    </>
  );
};

export default Columns;
