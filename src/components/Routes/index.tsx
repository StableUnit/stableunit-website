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
                    "https://level-tamarillo-3c5.notion.site/Job-Board-17c07943f264800f8639d37ffe1b9458";
                return null;
            }}
        />

        <Route path="*">
            <NotFound />
        </Route>
    </Switch>
);
