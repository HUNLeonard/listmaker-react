import { useColumsStore } from "../../stores/colums/store";
import { useTaskStore } from "../../stores/tasks/store";
import { Status } from "../../types/status";
import Button from "./Button";

const DeleteColumButton = ({ id }: { id: Status["id"] }) => {
  const deleteAllColumnTask = useTaskStore(
    (store) => store.deleteAllColumnTask,
  );
  const removeColum = useColumsStore((store) => store.removeColum);
  const removeColumColor = useColumsStore((store) => store.removeColum);

  return (
    <Button
      type="primary"
      className="hover:!text-red-500"
      execute={() => {
        deleteAllColumnTask(id);
        removeColum(id);
        removeColumColor(id)
      }}
    >
      Delete Column
    </Button>
  );
};

export default DeleteColumButton;
