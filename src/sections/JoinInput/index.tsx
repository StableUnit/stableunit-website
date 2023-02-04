import React, { useState } from "react";

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

    const handleDocClick = () => {
        window.open("https://forested-armchair-2f8.notion.site/Contribute-44f90fa0d929442caa884974f1100b53", "_blank");
    };

    const handleContributeClick = () => {
        window.open("https://forested-armchair-2f8.notion.site/Contribute-44f90fa0d929442caa884974f1100b53", "_blank");
    };

    return (
        <div className="join-input container">
            <img src="./img/input-bg.png" alt="Background Gradient" />
            <div className="join-input__content">
                <div className="join-input__title">Decentralized money that you truly own</div>
                <div className="join-input__description">
                    The next generation stablecoin, overcollateralized with uncensorable assets where you get to decide
                    about its future.
                </div>
                <div className="join-input__join text-gradient">JOIN EARLY ACCESS WAITLIST</div>
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
                    <div className="join-input__button" onClick={handleDocClick}>
                        <span>DOCUMENTATION</span>
                    </div>

                    <div className="join-input__button" onClick={handleContributeClick}>
                        <span>CONTRIBUTE</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default JoinInput;
