import React from "react";
import { Route } from 'react-router-dom'
import CheckoutComponent from "../containers/CheckoutComponent";
import PostBody from "../containers/PostsComponent";
import Body from "../containers/BodyComponent";
import BaseLayout from "../components/Layouts/BaseLayout";

const routes = [
    {
        path: "/checkout",
        component: CheckoutComponent,
    },
    {
        path: "/posts/:postId",
        component: PostBody,
    },
    {
        path: "/",
        component: Body,
    },
];

export const Routes = () => {
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

