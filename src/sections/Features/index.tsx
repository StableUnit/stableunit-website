import React from "react";

import { InclusiveImageIcon } from "../../icons";
import Block, { BlockType } from "../../components/Block";

import "./styles.scss";

const Features = () => {
    const data = [
        {
            title: "Earn just by Holding",
            Description: () => (
                <div>
                    Earn simply by holding USDPro. From multiple sources of yield, directly deposited to your wallet
                    and, in real time. <br />
                    <br />
                    No claiming, staking or farming required.
                </div>
            ),
            Image: () => <img className="features__wallet" src="/img/gifs/wallet.gif" />,
        },
        {
            title: "Extreme Capital Efficiency",
            Description: () => (
                <div>
                    Extreme Capital Efficiency StableUnit’s unique technology allows the protocol to utilize collateral
                    that other stablecoins cannot use.
                    <br />
                    <br />
                    Borrow against your positions from Aura, Convex, Pendle, Tokemak and many others.
                </div>
            ),
            Image: () => <img className="features__wallet" src="/img/features/Capital.png" />,
        },
        {
            title: "Maximum Composability",
            Description: () => (
                <div>
                    USDPro can be integrated <span className="text-gradient">ANYWHERE</span> in DeFi. No wrappers, no
                    restrictions, no rebasing, no code needed.
                </div>
            ),
            Image: InclusiveImageIcon,
        },
    ] as BlockType[];

    return (
        <div className="features container" id="features">
            <div className="features__title title">The simplest way to earn</div>

            <div className="features__content">
                {data.map((v) => (
                    <Block key={v.title} {...v} />
                ))}
            </div>
        </div>
    );
};

export default Features;
