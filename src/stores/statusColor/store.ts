import { create } from "zustand";
import { Status } from "../../types/status";
import { persist } from "zustand/middleware";

export type StatusColor = {
  statusId: Status["id"];
  bgcolor: `#${string}`;
  textcolor: `#${string}`;
};

interface StatusColorStore {
  statusColors: StatusColor[];
  addColumnColor: ({ ...params }: StatusColor) => void;
  editColumnColor: ({ ...params }: StatusColor) => void;
  removeColumnColor: (id: StatusColor["statusId"]) => void;
}

const defaultColors: StatusColor[] = [
  {
    statusId: "0",
    bgcolor: `#cccccc`,
    textcolor: `#000000`,
  },
  {
    statusId: "1",
    bgcolor: `#98c1d9`,
    textcolor: `#FFFFFF`,
  },
  {
    statusId: "2",
    bgcolor: `#ee6c4d`,
    textcolor: `#FFFFFF`,
  },
];

export const useStatusColorStore = create<StatusColorStore>()(
  persist(
    (set) => ({
      statusColors: defaultColors,
      addColumnColor: ({ statusId, bgcolor, textcolor }) =>
        set((store) => ({
          statusColors: [
            ...store.statusColors,
            { statusId, bgcolor, textcolor },
          ],
        })),
      editColumnColor: ({ statusId, bgcolor, textcolor }) =>
        set((store) => ({
          statusColors: [
            ...store.statusColors.map((color) =>
              color.statusId === statusId
                ? { statusId, bgcolor, textcolor }
                : color,
            ),

            { statusId, bgcolor, textcolor },
          ],
        })),
      removeColumnColor: (statusId) =>
        set((store) => ({
          statusColors: store.statusColors.filter(
            (color) => color.statusId !== statusId,
          ),
        })),
    }),
    { name: "columns-colors" },
  ),
);
