import React from "react";

import { SOCIAL_NETWORKS } from "../../utils/social";

import "./styles.scss";
import { DiscordIcon, GithubIcon, TgIcon } from "../../icons";

const Contacts = () => {
    const handleHrefClick = (href: string) => () => {
        window.open(href, "_blank");
    };

    return (
        <div className="contacts container" id="community">
            <img src="./img/contacts-bg.png" alt="Background Gradient" />
            <div className="contacts__content">
                <div className="contacts__title">Become an early member</div>
                <div className="contacts__description">
                    Learn more about the StableUnit protocol, come and chat with other community members or do some
                    simple tasks to get rewards.
                </div>
                <div className="contacts__sections">
                    <div className="contacts__section">
                        <div>Come and chat with the community</div>
                        <div className="contacts__section__buttons">
                            <div
                                className="contacts__section__button contacts__section__button--discord"
                                onClick={handleHrefClick(SOCIAL_NETWORKS.discord.href)}
                            >
                                <DiscordIcon />
                                <span>Discord</span>
                            </div>

                            <div
                                className="contacts__section__button contacts__section__button--tg"
                                onClick={handleHrefClick(SOCIAL_NETWORKS.tg.href)}
                            >
                                <TgIcon />
                                <span>Telegram</span>
                            </div>
                        </div>
                    </div>
                    <div className="contacts__section">
                        <div>Learn how to contribute to the protocol</div>
                        <div className="contacts__section__buttons">
                            <div
                                className="contacts__section__button contacts__section__button--github"
                                onClick={handleHrefClick(SOCIAL_NETWORKS.github.href)}
                            >
                                <GithubIcon />
                                <span>GitHub</span>
                            </div>

                            <div className="contacts__section__button" onClick={handleHrefClick("https://google.com")}>
                                <span>CONTRIBUTORS GUIDE</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contacts;
