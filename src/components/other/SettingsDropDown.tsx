import ModalOpenButton from "../Buttons/ModalOpenButton";
import { useColumsStore } from "../../stores/colums/store";
import { useEffect, useState } from "react";
import Button from "../Buttons/Button";
import DeleteColumButton from "../Buttons/DeleteColumButton";
import { Status } from "../../types/status";

type Dependencies = {
  status: Status;
};

const SettingsDropDown = ({ dependencies }: { dependencies: Dependencies }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const setEditableColum = useColumsStore((store) => store.setEditableColum);

  useEffect(() => {
    const controller = new AbortController;
    let firstClick = false;

    const closeSettings = (event: any) => {
      if (!firstClick) {
        firstClick = true;
        return
      }
      if (event.target.id !== "dropdownMenu") {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      window.addEventListener("click", closeSettings, { signal: controller.signal })
    } else {
      controller.abort("")
    }

    return () => { controller.abort("") }
  }, [dropdownOpen])

  return (
    <div className="relative">
      <Button className="" execute={() => setDropdownOpen((prev) => !prev)}>
        ...
      </Button>
      {dropdownOpen && (
        <div
          id="dropdownMenu"
          className="absolute top-12 right-0  w-36 flex flex-col space-y-1 bg-gray-light p-2 rounded-md">
          <ModalOpenButton status={dependencies.status} modalType="AddTask"
            execute={() => { setDropdownOpen(false) }}
          >
            Add new Task
          </ModalOpenButton>
          <ModalOpenButton
            status={dependencies.status}
            modalType="EditColumn"
            execute={() => { setDropdownOpen(false); setEditableColum(dependencies.status) }}
          >
            Edit Column
          </ModalOpenButton>
          <DeleteColumButton id={dependencies.status.id} />
        </div>
      )}
    </div>
  );
};

export default SettingsDropDown;
