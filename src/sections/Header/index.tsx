import React, { useState } from "react";

import "./styles.scss";
import { BurgerIcon, CloseIcon } from "../../icons";

const LINKS = [
    {
        text: "USD-Pro",
        id: "features",
    },
    {
        text: "Built by",
        id: "built-by",
    },
    {
        text: "How it works",
        id: "how-it-works",
    },
    {
        text: "Community",
        id: "radical",
    },
];

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const openMenu = () => {
        setIsMenuOpen(true);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const openLink = (id: string) => (e: React.MouseEvent) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsMenuOpen(false);
        }
    };

    return (
        <>
            <div className="header container">
                <div className="header__left">
                    <img src="./logo.svg" alt="" loading="lazy" />
                    <div>StableUnit</div>
                </div>

                <div className="header__right">
                    {LINKS.map((link) => (
                        <a key={link.text} className="header__link" href={`#${link.id}`} onClick={openLink(link.id)}>
                            {link.text}
                        </a>
                    ))}
                </div>
                <div className="header__burger" onClick={isMenuOpen ? closeMenu : openMenu}>
                    {isMenuOpen ? <CloseIcon /> : <BurgerIcon />}
                </div>
            </div>
            {isMenuOpen && (
                <div className="menu-modal">
                    <div className="menu-modal__content">
                        {LINKS.map((link) => (
                            <div key={link.text} className="menu-modal__content__link" onClick={openLink(link.id)}>
                                {link.text}
                            </div>
                        ))}
                    </div>
                    <div className="menu-modal__fade" onClick={closeMenu} />
                </div>
            )}
        </>
    );
};

export default Header;
