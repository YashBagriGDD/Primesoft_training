type State = {
  username: string | null;
  password: string | null;
  isLoggedIn: boolean;
};

type Actions = {
  type: "LOGIN" | "LOGOUT";
  payload: {
    username: string;
    password: string;
  } | null;
};

const defaultState: State = {
  username: null,
  password: null,
  isLoggedIn: false,
};

const UserReducer = (state: State = defaultState, action: Actions) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        username: action.payload?.username,
        password: action.payload?.password,
        isLoggedIn: true,
      };
    case "LOGOUT":
      state = defaultState;
      return { ...state };
    default:
      return state;
  }
};

export default UserReducer;
