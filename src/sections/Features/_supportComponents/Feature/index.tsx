import React, { FC } from "react";

import "./styles.scss";

export type FeatureType = {
    Image: FC;
    title: string;
    Description: FC;
};

const Feature = ({ Image, title, Description }: FeatureType) => {
    return (
        <div className="feature">
            <div className="feature__content">
                <div className="feature__title">{title}</div>
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
