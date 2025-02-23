import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Status } from "../../types/status";

interface ColumsStore {
  colums: Status[];
  editableColum: Status | null;
  setEditableColum: (arg: Status | null) => void;
  addColum: (param: Status["name"]) => string;
  removeColum: (param: Status["id"]) => void;
  editColum: (param: Status) => void;
  movePosition: (prevCol: Status["id"], curCol: Status) => void;
}
export const useColumsStore = create<ColumsStore>()(
  persist(
    (set) => ({
      colums: [
        { id: "0", name: "TODO" },
        { id: "1", name: "ONGOING" },
        { id: "2", name: "DONE" },
      ],
      addColum: (newColumName) => {
        const newColumn = {
          id: crypto.randomUUID(),
          name: newColumName,
        };

        set((store) => ({
          colums: [...store.colums, newColumn],
        }));

        return newColumn.id;
      },
      removeColum: (deleteColumId) =>
        set((store) => ({
          colums: store.colums.filter((Column) => Column.id !== deleteColumId),
        })),
      editColum: (editColum) =>
        set((store) => ({
          colums: store.colums.map((col) =>
            col.id === editColum.id ? { ...editColum, id: col.id } : col,
          ),
        })),
      movePosition: (beforeColumnId, currentColumn) =>
        set((store) => {
          const newColumns = store.colums.filter(
            (col) => col.id !== currentColumn.id,
          );
          const beforeIndex = newColumns.findIndex(
            (col) => col.id === beforeColumnId,
          );

          newColumns.splice(beforeIndex, 0, currentColumn);
          return { colums: newColumns };
        }),
      editableColum: null,
      setEditableColum: (editColum) => set({ editableColum: editColum }),
    }),
    { name: "colums" },
  ),
);
