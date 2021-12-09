import Home from "../containers/Home";
import BaseLayout from "../components/Layouts/BaseLayout";
import React from "react";
import { Route } from "react-router";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/home",
        component: Home,
    }
];

export const Routes: () => any[] = () => {
    return routes.map(route => {
        return (
            <Route key={route.path}
                   path={route.path}
                   render={(props) => (
                       <BaseLayout {...props}>
                           <route.component />
                       </BaseLayout>
                   )}
            />
        );
    });
};