import React from "react";

import "./styles.scss";

const BuiltBy = () => (
    <div className="built-by container">
        <div className="title">Built by</div>
        <div className="built-by__content">
            <div className="built-by__content__text">
                Stable Unit was founded by a world class team of crypto native supercoders and early employees of
                popular DeFi apps.
                <br />
                <br />
                Core team members developed smart contracts that surpassed $1 billion in stablecoin volume and are now
                disrupting stablecoins and the future of money.
            </div>
            <div className="built-by__content__partners">
                <img src="./img/partners.png" alt="Partners" />
                <div className="built-by__content__partners__gift">
                    Are you a 10X Engineer? Join{" "}
                    <a href="https://discord.gg/WrCrCW6F4c" target="_blank" rel="noreferrer">
                        #dev
                    </a>
                    , we have a gift for you
                </div>
            </div>
        </div>
        <div className="built-by__instructions">
            <div className="built-by__instruction">
                Introduce yourself in the discord to start your DAO journey and get your SU DAO NFT.
            </div>
            <div className="built-by__instruction">
                For any other type of contribution or inquiry, join the Stable Unit telegram and come meet the team.
            </div>
        </div>
    </div>
);

export default BuiltBy;
