import { CardState, RollCallCardInterface } from "../../interfaces/interfaces";

type Actions = { type: "BUILD" | "GET"; payload?: RollCallCardInterface[] };

export default (state: CardState = { list: [] }, action: Actions) => {
  switch (action.type) {
    case "BUILD":
      return { ...state, list: action.payload };
    default:
      return state;
  }
};
