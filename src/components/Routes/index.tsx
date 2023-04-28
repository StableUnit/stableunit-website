import React from "react";
import { Route, Switch } from "react-router-dom";

import MainPage from "../../pages/MainPage";
import NotFound from "../../pages/NotFound";

export const Routes = () => (
    <Switch>
        <Route exact path="/">
            <MainPage />
        </Route>

        <Route
            exact
            path="/contribute"
            component={() => {
                window.location.href = "https://docs.google.com/forms/d/1zkN54q0zsfT2N4P4OIz-HL_SX7SrI40npgP3bu8OxbM/";
                return null;
            }}
        />

        <Route path="*">
            <NotFound />
        </Route>
    </Switch>
);
