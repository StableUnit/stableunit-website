import React from "react";

import Scroller from "../../components/Scroller";
import { GradientHref } from "../../components/GradientHref";
import { handleHrefClick } from "../../utils/click";

import "./styles.scss";

const BuiltBy = () => (
    <div className="built-by" id="built-by">
        <div className="built-by__title title">Built by</div>
        <div className="built-by__description container">
            StableUnit was founded by a world class team of crypto native supercoders and early employees of popular
            DeFi apps. Core team members developed smart contracts that surpassed $1 billion in stablecoin volume and
            are now disrupting stablecoins and the future of money.
        </div>
        <Scroller>
            {Array.from(Array(9).keys()).map((n) => (
                <img key={n} className="built-by__image" src={`./img/built/${n + 1}.png`} alt="Built by" />
            ))}
        </Scroller>
        <div className="built-by__gift container">
            Are you a 10X Engineer? Join{" "}
            <GradientHref href="https://discord.gg/HZKDTgfQZv" target="_blank">
                #dev
            </GradientHref>
            , we have a gift for you
        </div>
        <div className="built-by__instructions container">
            <div className="built-by__instruction" style={{ backgroundImage: "url('./img/step-bg.svg')" }}>
                <div className="built-by__instruction__text">
                    Introduce yourself in the discord to start your DAO journey and get your SU DAO NFT.
                </div>
                <div
                    className="built-by__instruction__button"
                    onClick={handleHrefClick("https://discord.gg/WrCrCW6F4c")}
                >
                    GET SU DAO NFT
                </div>
            </div>
            <div className="built-by__instruction" style={{ backgroundImage: "url('./img/step-bg.svg')" }}>
                <div className="built-by__instruction__text">
                    For any other type of contribution or inquiry, join the Stable Unit telegram and meet the team.
                </div>
                <div className="built-by__instruction__button" onClick={handleHrefClick("https://t.me/stableunit")}>
                    CONTRIBUTE
                </div>
            </div>
        </div>
    </div>
);

export default BuiltBy;
