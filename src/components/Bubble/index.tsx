import React from "react";

import { GradientBorder } from "../GradientBorder";

import "./styles.scss";
import { GradientHref } from "../GradientHref";

export type BubbleType = {
    title: string;
    description: string;
    top?: number;
    left?: number;
    right?: number;
    bottom?: number;
};

const Bubble = ({ title, description, top, left, right, bottom }: BubbleType) => {
    return (
        <GradientBorder borderRadius={24} className="bubble-container" style={{ top, left, right, bottom }}>
            <div className="bubble">
                <div className="bubble__description">{description}</div>
                <div className="bubble__title text-gradient">{title}</div>
            </div>
        </GradientBorder>
    );
};

export default Bubble;
