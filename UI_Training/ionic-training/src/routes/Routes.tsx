import BaseLayout from "../components/Layouts/BaseLayout";
import React from "react";
import {Route} from "react-router";
import {Paths} from "../constants/Paths";

export const Routes: () => any[] = () => {
    return Paths.map((route) => {
        return (
            <Route
                key={route.name}
                path={route.path}
                exact={true}
                render={(props) => (
                    <BaseLayout {...props}>
                        <route.component/>
                    </BaseLayout>
                )}
            />
        );
    });
};
