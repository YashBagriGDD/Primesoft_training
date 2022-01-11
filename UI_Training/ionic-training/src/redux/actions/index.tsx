import { RollCallCardInterface } from "../../interfaces/interfaces";

export const GetCards = (jsonItem: RollCallCardInterface[]) => {
  return {
    type: "BUILD",
    payload: jsonItem,
  };
};

export const LoginAction = (username: string, password: string) => {
  return {
    type: "LOGIN",
    payload: {
      username: username,
      password: password,
      isLoggedIn: true,
    },
  };
};

export const LogoutAction = () => {
  return {
    type: "LOGOUT",
  };
};
