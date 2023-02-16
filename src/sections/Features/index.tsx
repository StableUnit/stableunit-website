import React from "react";

import { FairImageIcon, UncensorableImageIcon, InclusiveImageIcon } from "../../icons";
import Block, { BlockType } from "../../components/Block";
import { GradientHref } from "../../components/GradientHref";

import "./styles.scss";

const Features = () => {
    const data = [
        {
            title: "Uncensorable",
            Description: () => (
                <div>
                    <GradientHref href="https://dune.com/kwizzles/usdt-usdc-bans" isExternal>
                        Current stablecoins
                    </GradientHref>{" "}
                    or{" "}
                    <GradientHref href="https://daistats.com/" isExternal>
                        their collateral can be seized
                    </GradientHref>
                    . USD-Pro is overcollateralized with uncensorable assets that nobody can take from you
                </div>
            ),
            Image: UncensorableImageIcon,
        },
        {
            title: "Fair",
            Description: () => (
                <div>
                    Every user of USD-Pro is entitled to protocol gains. You don't need to stake it, just simply hold it
                    in your wallet and get part of the diversified revenue stream of the protocol
                    <br />
                    <br />
                    <b>Meet zero click DeFi</b>
                </div>
            ),
            Image: () => <img className="features__wallet" src="/img/gifs/wallet.gif" />,
        },
        {
            title: "Inclusive",
            Description: () => (
                <div>
                    Fundamental DeFi assets have to be owned by the whole crypto community not by a few VCs.
                    StableUnitDAO is governed by both social capital and financial capital so that millions of people
                    will control it.
                    <br />
                    <br />
                    When you contribute you increase your voting power.
                </div>
            ),
            Image: InclusiveImageIcon,
        },
    ] as BlockType[];

    return (
        <div className="features container" id="features">
            <div className="features__title title">The world needs resilient base assets</div>

            <div className="features__content">
                {data.map((v) => (
                    <Block key={v.title} {...v} />
                ))}
            </div>
        </div>
    );
};

export default Features;
