import { Status } from "../types/status";

export const statusColor = (STATUS: Status["id"]) => {
  switch (STATUS) {
    case "0":
      return "bg-gray-light";
    case "1":
      return "bg-ongoing";
    case "2":
      return "bg-done";
    default:
      return;
  }
};
