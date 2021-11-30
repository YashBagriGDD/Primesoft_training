import React from "react";
import { Route } from 'react-router-dom'
import CheckoutComponent from "../components/Layouts/checkout_component";
import PostBody from "../components/common/posts_component";
import Body from "../components/Layouts/body_components";

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
        return <Route key={route.path} path={route.path} component={route.component} />;
    })
}

