import { useMemo } from "react";
import { useColumsStore } from "../../stores/colums/store";
import { useTaskStore } from "../../stores/tasks/store";
import DeleteButton from "../Buttons/DeleteButton";
import EditButton from "../Buttons/EditButton";
import BubbleText from "../other/BubbleText";

const Task = ({ id }: { id: string | undefined }) => {
  if (!id) return;
  const task = useTaskStore((store) => store.tasks.find(task => task.id === id))
  const setDraggedTask = useTaskStore((store) => store.setDraggedTask);
  const columns = useColumsStore((store) => store.colums);
  const TaskStatusName = useMemo(() => columns.find(status => status.id === task?.status), [columns, task?.status]);

  return (
    <div
      draggable
      onDragStart={() => setDraggedTask({ id: task?.id, status: task?.status })}
      className="flex justify-between flex-col bg-white rounded-sm min-h-20 text-black p-2 cursor-move"
    >
      <div className="flex flex-row justify-between">
        <p className="max-w-4/6 break-all max-lg:text-sm line-clamp-6" title={task?.title}>
          {task?.title}
        </p>
        <div className="flex gap-1 items-start">
          <EditButton task={task} />
          <DeleteButton id={task?.id} />
        </div>
      </div>
      <div className="flex justify-end">
        <BubbleText columnId={task?.status} >
          {`${TaskStatusName?.name}`}
        </BubbleText>
      </div>
    </div>
  );
};

export default Task;
