import React from "react";

import "./styles.scss";

const SupportedBy = () => (
    <div className="supported-by" id="supported-by">
        <div className="supported-by__title title">Supported by</div>

        <div className="supported-by__content">
            <div className="supported-by__section">
                <div className="supported-by__section__title">Lead Investor</div>
                <div className="supported-by__section__content">
                    <img
                        className="supported-by__image"
                        src="./img/support/fundamental.png"
                        height={74}
                        alt="Fundamental Labs"
                    />
                </div>
            </div>
            <div className="supported-by__section">
                <div className="supported-by__section__title">With participation from</div>
                <div className="supported-by__section__content">
                    <img className="supported-by__image" src="./img/support/mexc.png" height={70} alt="MEXC Ventures" />
                    <img className="supported-by__image" src="./img/support/NxGen.png" height={34} alt="NxGen" />
                    <img className="supported-by__image" src="./img/support/ngc.png" height={43} alt="NGC Ventures" />
                </div>
            </div>
            <div className="supported-by__section">
                <div className="supported-by__section__title">Angels in the community</div>
                <div className="supported-by__section__content">
                    <img className="supported-by__image" src="./img/support/1inch.png" height={74} alt="1Inch" />
                    <img className="supported-by__image" src="./img/support/dextools.png" height={74} alt="DexTools" />
                    <img className="supported-by__image" src="./img/support/gearbox.png" height={56} alt="Gearbox" />
                    <img className="supported-by__image" src="./img/support/KUCOIN.png" height={35} alt="KUCOIN" />
                    <img className="supported-by__image" src="./img/support/Matter.png" height={49} alt="Matter Labs" />
                </div>
            </div>
        </div>
    </div>
);

export default SupportedBy;
