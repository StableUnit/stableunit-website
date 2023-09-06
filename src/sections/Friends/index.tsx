import React from "react";

import "./styles.scss";

const FRIENDS_WEBSITES = [
    { name: "ambire.com", width: 220 },
    { name: "pendle.finance", width: 220 },
    { name: "aura.finance", width: 220 },
    { name: "quickswap.exchange", width: 220 },
    { name: "unlimited.trade", width: 220 },
];

const Friends = () => (
    <div className="friends container">
        <div className="friends__title title">Partners</div>
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
