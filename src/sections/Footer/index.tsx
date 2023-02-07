import React from "react";

import "./styles.scss";

const LINKS = [
    {
        text: "Privacy policy",
        href: "#Privacy",
    },
    {
        text: "Terms & Conditions",
        href: "#Terms",
    },
];

const Footer = () => (
    <div className="footer container">
        <div className="footer__left">
            <img src="./logo.svg" alt="" loading="lazy" />
            <div>StableUnit</div>
        </div>
        <div className="footer__center">© 2023 StableUnit | All rights reserved.</div>

        {/* <div className="footer__right"> */}
        {/*    {LINKS.map((link) => ( */}
        {/*        <a key={link.text} className="footer__link" href={link.href} target="_blank" rel="noreferrer"> */}
        {/*            {link.text} */}
        {/*        </a> */}
        {/*    ))} */}
        {/* </div> */}
    </div>
);

export default Footer;
