import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import MainPage from "../../pages/MainPage";

export const Routes = () => (
    <Switch>
        <Route exact path="/">
            <MainPage />
        </Route>

        <Route
            exact
            path="/contribute"
            component={() => {
                window.location.href = "https://g6pdjznzhhe.typeform.com/to/FAao9uaU";
                return null;
            }}
        />
    </Switch>
);
