import BaseLayout from "../components/Layouts/BaseLayout";
import React from "react";
import { Redirect, Route } from "react-router";
import { Paths } from "../constants/Paths";
import { RootState } from "..";
import { PostsState } from "../interfaces/interfaces";
import { useSelector } from "react-redux";

export const Routes: () => any[] = () => {
  const user = useSelector<RootState, PostsState["user"]>((state) => state);

  return Paths.map((route) => {
    return (
      <Route
        key={route.name}
        path={route.path}
        exact={true}
        render={(props) => (
          // user.isLoggedIn ? (
          //   <BaseLayout {...props}>
          //     <route.component />
          //   </BaseLayout>
          // ) : (
          //   <Redirect to={"/login"} />
          // )
          <BaseLayout {...props}>
            <route.component />
          </BaseLayout>
        )}
      />
    );
  });
};
