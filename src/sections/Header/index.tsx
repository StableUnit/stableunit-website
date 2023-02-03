import React from "react";

import "./styles.scss";

const LINKS = [
    {
        text: "USD-Pro",
        href: "#features",
    },
    {
        text: "Built by",
        href: "#built-by",
    },
    {
        text: "How it works",
        href: "#how-it-works",
    },
    {
        text: "Community",
        href: "#community",
    },
];

const Header = () => (
    <div className="header container">
        <div className="header__left">
            <img src="./logo.svg" alt="" loading="lazy" />
            <div>StableUnit</div>
        </div>

        <div className="header__right">
            {LINKS.map((link) => (
                <a className="header__link" href={link.href}>
                    {link.text}
                </a>
            ))}
        </div>
    </div>
);

export default Header;
