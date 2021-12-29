import { RollCallCardInterface } from "../../interfaces/interfaces";

export const GetCards = (jsonItem: RollCallCardInterface[]) => {
  return {
    type: "BUILD",
    payload: jsonItem,
  };
};
