export const LoginAction = (username: string, password: string) => {
  return {
    type: "LOGIN",
    payload: {
      username,
      password,
      isLoggedIn: true,
    },
  };
};
