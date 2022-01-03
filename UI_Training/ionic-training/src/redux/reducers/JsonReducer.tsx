import { RollCallCardInterface } from "../../interfaces/interfaces";

type State = {
  list: RollCallCardInterface[];
};

const defaultState: State = {
  list: [],
};

type Actions = { type: "BUILD"; payload: RollCallCardInterface[] };

const JsonReducer = (state: State = defaultState, action: Actions) => {
  switch (action.type) {
    case "BUILD":
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default JsonReducer;
