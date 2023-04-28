import React from "react";

import Header from "../../sections/Header";

import "./styles.scss";
import { GradientHref } from "../../components/GradientHref";

const NotFound = () => {
    return (
        <div className="not-found">
            <Header />
            <div className="not-found__content">
                <div className="not-found__content__title">Error 404: Stability Disrupted</div>
                <div className="not-found__content__description">
                    The page you were looking for appears to have disappeared into the digital ether. <br />
                    <GradientHref href="https://stableunit.org">Visit our homepage</GradientHref> for the latest updates
                    of StableUnit Protocol and find the information you need to maintain your financial balance.
                </div>
            </div>
        </div>
    );
};

export default NotFound;
