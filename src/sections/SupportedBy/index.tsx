import React from "react";

import Scroller from "../../components/Scroller";

import "./styles.scss";

const SUPPORT_COMPANIES_AMOUNT = 4;

const SupportedBy = () => (
    <div className="supported-by" id="supported-by">
        <div className="supported-by__title title">Supported by</div>
        <Scroller>
            {Array.from(Array(7).keys()).map((n) => (
                <img
                    key={n}
                    className="supported-by__image"
                    src={n < SUPPORT_COMPANIES_AMOUNT ? `./img/support/${n + 1}.png` : "./img/support/default.png"}
                    alt="Supported by"
                />
            ))}
        </Scroller>
    </div>
);

export default SupportedBy;
