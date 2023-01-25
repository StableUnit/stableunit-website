import React from "react";

import { TgIcon, DiscordIcon, MediumIcon, TwitterIcon, GithubIcon } from "../../icons";

interface SocialNetworkProps {
    name: string;
    width?: number;
    height?: number;
}

export const SOCIAL_NETWORKS: Record<string, { href: string; icon: React.FunctionComponent, name: string }> = {
    tg: {
        name: "Telegram",
        href: "https://t.me/stableunit",
        icon: TgIcon,
    },
    discord: {
        name: "Discord",
        href: "https://discord.gg/puMeUhUpJf",
        icon: DiscordIcon,
    },
    medium: {
        name: "Medium",
        href: "https://blog.stableunit.org/",
        icon: MediumIcon,
    },
    twitter: {
        name: "Twitter",
        href: "https://twitter.com/stableunitdao",
        icon: TwitterIcon,
    },
    github: {
        name: "Github",
        href: "https://github.com/StableUnit",
        icon: GithubIcon,
    },
};

export const SocialNetwork = ({ name, width = 20, height = 20 }: SocialNetworkProps) => {
    const data = SOCIAL_NETWORKS[name];
    const Icon = data?.icon;

    return data ? (
        <a href={data.href} target="_blank" rel="noreferrer">
            {/* @ts-ignore */}
            <Icon style={{ width, height }} />
        </a>
    ) : null;
};
