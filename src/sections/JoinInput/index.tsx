import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { handleHrefClick } from "../../utils/click";

import "./styles.scss";

const JoinInput = () => {
    const [email, setEmail] = useState<string>();

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.value) {
            setEmail(e.target.value);
        } else {
            setEmail(undefined);
        }
    };

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://substackapi.com/widget.js";
        script.async = true;
        document.getElementsByTagName("body")[0].appendChild(script);
    }, []);

    return (
        <div className="join-input container">
            <img src="./img/input-bg.png" alt="Background Gradient" />
            <div className="join-input__content">
                <div className="join-input__title">Break the barriers of capital efficiency</div>
                <div className="join-input__description">
                    The next generation stablecoin, overcollateralized with liquidity pool (LP) tokens and liquid staking tokens.
                </div>
                <div className="join-input__join text-gradient">JOIN EARLY ACCESS WAITLIST</div>
                <div id="custom-substack-embed" />
                <div className="join-input__input-container">
                    <input
                        value={email}
                        className="join-input__input"
                        onChange={handleInputChange}
                        placeholder="Email"
                    />
                    <div className="join-input__input-button">JOIN</div>
                </div>
                <div className="join-input__buttons">
                    <div
                        className="join-input__button"
                        onClick={handleHrefClick("https://stableunit.gitbook.io/documentation/")}
                    >
                        <span>DOCUMENTATION</span>
                    </div>

                    <Link to="contribute" target="_blank" rel="noopener noreferrer">
                        <div className="join-input__button">
                            <span>CONTRIBUTE</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default JoinInput;
