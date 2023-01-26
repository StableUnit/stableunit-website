import React from 'react';

import {FairImageIcon, UncensorableIcon, UncensorableImageIcon, InclusiveImageIcon} from "../../icons";
import Feature, {FeatureType} from "./_supportComponents/Feature";

import './styles.scss';

const Features = () => {
  const data = [
    {
      positionX: -80,
      FeatureIcon: UncensorableIcon,
      title: 'Uncensorable',
      Description: () => (
        <div>
          <u>Current stablecoins</u> or <u>their collateral can be seized</u>.
          USD-Pro is overcollateralized with uncensorable assets that nobody can take from you
        </div>
      ),
      Image: UncensorableImageIcon,
    },
    {
      positionX: 80,
      FeatureIcon: () => (
        <img src="./features/Fair.png" />
      ),
      title: 'Fair',
      Description: () => (
        <div>
          Every user of USD-Pro is entitled to protocol gains. You don't need to stake it, just simply hold it in your wallet and get part of the diversified revenue stream of the protocol
          <br />
          <br />
          <b>Meet zero click DeFi</b>
        </div>
      ),
      Image: FairImageIcon,
    },
    {
      positionX: -80,
      FeatureIcon: () => (
        <img src="./features/Inclusive.png" />
      ),
      title: 'Inclusive',
      Description: () => (
        <div>
          Fundamental DeFi assets have to be owned by the whole crypto community not by a few VCs. StableUnitDAO is governed by both social capital and financial capital so that millions of people will control it.
          <br />
          <br />
          When you contribute you increase your voting power.
        </div>
      ),
      Image: InclusiveImageIcon,
    }
  ] as FeatureType[];

  return (
    <div className="features">
      <div className="features__title">
        The world needs resilient base assets
      </div>

      <div className="features__content">
        {data.map((v) => <Feature key={v.title} {...v} />)}
      </div>
    </div>
  );
};

export default Features;
