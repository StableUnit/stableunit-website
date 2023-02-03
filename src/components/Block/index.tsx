import React, { FC } from "react";

import "./styles.scss";

export type BlockType = {
    Image: FC;
    title?: string;
    Description: FC;
};

const Block = ({ Image, title, Description }: BlockType) => {
    return (
        <div className="block">
            <div className="block__content">
                {title && <div className="block__title">{title}</div>}
                <div className="block__description">
                    <Description />
                </div>
            </div>
            <div className="block__image">
                <Image />
            </div>
        </div>
    );
};

export default Block;
