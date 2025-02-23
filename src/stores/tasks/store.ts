import { create } from "zustand";
import {
  // devtools, subscribeWithSelector,
  persist,
} from "zustand/middleware";
import { Status } from "../../types/status";

export interface TaskProp {
  id: string | undefined;
  title: string | undefined;
  status: Status["id"] | undefined;
}

interface StoreState {
  tasks: TaskProp[];
  draggedTask: { id: TaskProp["id"]; status: TaskProp["status"] } | null;
  editableTask: TaskProp | null;
  setEditableTask: (task: TaskProp | null) => void;
  // tasksInOngoing: number;

  addTask: ({ title, status }: TaskProp) => void;
  deleteTask: (id: TaskProp["id"]) => void;
  deleteAllColumnTask: (statusId: TaskProp["id"]) => void;
  updateTask: (task: TaskProp) => void;
  setDraggedTask: (
    task: { id: TaskProp["id"]; status: TaskProp["status"] } | null,
  ) => void;

  moveTask: (id: TaskProp["id"], newStatus: TaskProp["status"]) => void;
}

const store: (set: any) => StoreState = (set) => ({
  tasks: [],
  draggedTask: null,
  editableTask: null,
  //tasksInOngoing: 0,
  addTask: ({ title, status }) =>
    set(
      (store: StoreState) => ({
        tasks: [...store.tasks, { id: crypto.randomUUID(), title, status }],
      }),
      // false,
      // "addTask",
    ),

  deleteTask: (id) =>
    set(
      (store: StoreState) => ({
        tasks: store.tasks.filter((task) => task.id !== id),
      }),
      // false,
      // "deleteTask",
    ),
  deleteAllColumnTask: (status) =>
    set((store: StoreState) => ({
      tasks: store.tasks.filter((task) => task.status !== status),
    })),

  updateTask: (updateTask) =>
    set(
      (store: StoreState) => ({
        tasks: store.tasks.map((task) =>
          task.id === updateTask.id
            ? { ...task, title: updateTask.title, status: updateTask.status }
            : task,
        ),
      }),
      // false,
      // "updateTask",
    ),

  setDraggedTask: (task) => set({ draggedTask: task }, false, "setDraggedTask"),
  setEditableTask: (task) =>
    set({ editableTask: task }, false, "setUpdateTask"),

  moveTask: (id, newStatus) =>
    set(
      (store: StoreState) => ({
        tasks: store.tasks.map((task) =>
          task.id === id ? { ...task, status: newStatus } : task,
        ),
      }),
      // false,
      // "moveTask",
    ),
});

export const useTaskStore = create<StoreState>()(
  // subscribeWithSelector(
  persist(
    // devtools(
    store,
    // )
    { name: "store" },
  ),
  // ),
);

// useTaskStore.subscribe(
//   (store) => store.tasks,
//   (newTasks, prevTasks) => {
//     useTaskStore.setState((state) => ({
//       tasksInOngoing: newTasks.filter((task) => task.status === "ONGOING")
//         .length,
//     }));
//   },
// );
