import React from "react";

import "./styles.scss";

const FRIENDS_WEBSITES = [
    { name: "avvy.domains", width: 240 },
    { name: "buidlerstribe.com", width: 140 },
    { name: "did.id", width: 140 },
    { name: "dokidoki.com", width: 290 },
    { name: "thedapplist.com", width: 130 },
    { name: "florence.finance", width: 110 },
    { name: "quillaudits.com", width: 80 },
    { name: "aura.finance", width: 80 },
    { name: "quickswap.exchange", width: 310 },
    { name: "bittensor.com", width: 80 },
    { name: "unison.gg", width: 80 },
    { name: "via.exchange", width: 80 },
];

const Friends = () => (
    <div className="friends container">
        <div className="friends__title title">Protocol friends</div>
        <div className="friends__content">
            {FRIENDS_WEBSITES.map(({ name, width }) => (
                <a href={`https://${name}`} target="_blank" rel="noreferrer" key={name}>
                    <img width={width} className="friends__image" src={`./img/partners/${name}.svg`} alt={name} />
                </a>
            ))}
        </div>
    </div>
);

export default Friends;
