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

        <Route
            exact
            path="/jobs"
            component={() => {
                window.location.href =
                    // eslint-disable-next-line max-len
                    "https://docs.google.com/document/d/1XjcLgAz_Cy-H7t3IjDpLmFjE-_rgiNHMJBAPKj0oCwI/edit?tab=t.b9ph2cdrlppm";
                return null;
            }}
        />

        <Route path="*">
            <NotFound />
        </Route>
    </Switch>
);
