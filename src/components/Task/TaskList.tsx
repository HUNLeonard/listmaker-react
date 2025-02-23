import { useMemo } from 'react'
import { useTaskStore } from '../../stores/tasks/store';
import Task from './Task';
import { Status } from '../../types/status';

const TaskList = ({ statusId }: { statusId: Status["id"] }) => {
  const tasks = useTaskStore((store) => store.tasks);
  const filtered = useMemo(
    () => tasks.filter((task) => task.status === statusId),
    [tasks, statusId],
  );

  return (
    <div className={`space-y-2 bg-gray min-h-76 p-2 rounded-lg`}>
      {filtered.map((task) => (
        <Task id={task!.id} key={`${task.id}`} />
      ))}
    </div>
  )
}

export default TaskList