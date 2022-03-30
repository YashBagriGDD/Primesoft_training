export interface RollCallCardInterface {
  state: string;
  billNum: string;
  name: string;
  endDate: string;
  isSoftRollCall?: boolean;
  summary?: string;
}

type State = {
  list: RollCallCardInterface[];
};

const defaultState: State = {
  list: [],
};

type Actions = { type: "BUILD"; payload: RollCallCardInterface[] };

const JsonReducer = (state: State = defaultState, action: Actions): State => {
  switch (action.type) {
    case "BUILD":
      return { ...state, list: action.payload };
    default:
      return state;
  }
};

export default JsonReducer;
