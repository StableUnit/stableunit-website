import React, {FC} from 'react';

import './styles.scss';

export type FeatureType = {
  FeatureIcon: FC;
  Image: FC;
  title: string;
  Description: FC;
  positionX: number;
}

const Feature = ({FeatureIcon, Image, title, Description, positionX}: FeatureType) => {
  return (
    <div className="feature" style={{ transform: `translateX(${positionX}px)`}}>
      <div className="feature__content">
        <FeatureIcon />
        <div className="feature__title">
          {title}
        </div>
        <div className="feature__description">
          <Description />
        </div>
      </div>
      <div className="feature__image">
        <Image />
      </div>
    </div>
  );
};

export default Feature;
