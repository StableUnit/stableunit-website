import React from "react";

import { LiquidationImage, LayerImage, ReserveImage } from "../../icons";
import Block, { BlockType } from "../../components/Block";

import "./styles.scss";

const HowItWorks = () => {
    const data = [
        {
            Description: () => (
                <div>
                    StableUnit utilizes the battle-tested CDP model of MakerDAO and drastically improves it.
                    <br />
                    <br />
                    Instead of letting the reserve idle, StableUnit generates yield by depositing it in reputable
                    protocols such as Yearn, Compound and Curve.
                    <br />
                    <br />
                    The next generation stablecoin is here and it entitles every single holder of USD-Pro to part of the
                    protocol’s revenue automatically.
                    <br />
                    <br />
                    No staking, no lock-ups, a continuous stream of yield coming from the protocol’s revenue. Meet zero
                    click DeFi.
                </div>
            ),
            Image: ReserveImage,
        },
        {
            Description: () => (
                <div>
                    Each layer supports the other in case of severe market crashes. This makes USD Pro the most robust
                    decentralized stablecoin ever made.
                </div>
            ),
            Image: LayerImage,
        },
        {
            Description: () => (
                <div>
                    <div>
                        Stable Unit's state-of-the-art liquidation system uses an asynchronous fixed spread liquidation
                        module.
                        <br />
                        <br />
                        It is up to orders of magnitude more efficient than AAVE's liquidation system, which is
                        recognized for its efficiency in the industry.
                        <br />
                        <br />
                        It is also providing part of the yield for USD-Pro holders as one of Stable Unit’s revenue
                        sources.
                        <br />
                        <br />
                    </div>
                    <div>
                        Documentation{"  "}Monte-Carlo{"  "}Agent simulation
                    </div>
                    <div>Simulation Liquidation system design Part 1 and Part 2</div>
                </div>
            ),
            Image: LiquidationImage,
        },
    ] as BlockType[];

    return (
        <div className="how-it-works container" id="how-it-works">
            <div className="title">How StableUnit works</div>

            <div className="how-it-works__content">
                {data.map((v, index) => (
                    <Block key={index} {...v} />
                ))}
            </div>
        </div>
    );
};

export default HowItWorks;
