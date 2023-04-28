import React from "react";

import "./styles.scss";

const FRIENDS_WEBSITES = [
    "alien.fi",
    "avvy.domains",
    "buidlerstribe.com",
    "did.id",
    "dokidoki.com",
    "thedapplist.com",
    "quickswap.exchange",
    "florence.finance",
    "quillaudits.com",
    "aura.finance",
    "bittensor.com",
    "unison.gg",
    "via.exchange",
];

const Friends = () => (
    <div className="friends container">
        <div className="friends__title title">Protocol friends</div>
        <div className="friends__content">
            {FRIENDS_WEBSITES.map((href) => (
                <a href={`https://${href}`} target="_blank" rel="noreferrer">
                    <img className="friends__image" src={`./img/partners/${href}.svg`} alt={href} />
                </a>
            ))}
        </div>
    </div>
);

export default Friends;
