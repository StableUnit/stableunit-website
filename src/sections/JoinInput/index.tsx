/* eslint-disable max-len */
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { handleHrefClick } from "../../utils/click";
import Bubble from "../../components/Bubble";
import { useDimensions } from "../../hooks/useDimensions";

import "./styles.scss";

const JoinInput = () => {
    const [email, setEmail] = useState<string>();
    const { width } = useDimensions();
    const isSSize = width <= 768;
    const isMSize = width > 768 && width <= 1152;
    const isLSize = width > 1152;

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
        <div className="container">
            <div className="join-input">
                <img src="./img/input-bg.png" alt="Background Gradient" />
                <div className="join-input__content">
                    <div className="join-input__title">The Ultimate Stablecoin</div>
                    <div className="join-input__description">
                        Earn from diversified revenue streams, directly in your wallet.
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
            <div className="join-input__bubbles">
                <Bubble
                    title="Make it easy to use"
                    description="DeFi is unneccesarily complex."
                    top={isLSize ? 100 : 50}
                    left={isLSize ? -30 : -15}
                />
                <Bubble
                    title="Share it with everyone"
                    description="Large stablecoin providers like Tether and Circle make billions but don't share profits with their users."
                    bottom={isLSize ? 140 : 100}
                    left={isLSize ? -40 : -20}
                />
                <Bubble
                    title="Make it easy to integrate"
                    description="Rebasing tokens like stETH and AMPL make integration with other DeFi protocol a development nightmare"
                    bottom={isLSize ? 160 : 120}
                    right={isLSize ? -40 : -20}
                />
            </div>
        </div>
    );
};

export default JoinInput;
