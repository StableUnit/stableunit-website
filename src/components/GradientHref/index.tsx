import React from "react";
import cn from "classnames";

import "./styles.scss";

interface GradientBorderProps {
    id?: string;
    className?: string;
    target?: string;
    disabled?: boolean;
    href?: string;
    children: React.ReactNode;
    onClick?: () => void;
    isExternal?: boolean;
}

export const GradientHref = ({
    id,
    children,
    isExternal = false,
    className,
    target,
    disabled,
    href,
    onClick,
}: GradientBorderProps) => {
    return href ? (
        <a
            href={href}
            id={id}
            onClick={onClick}
            target={isExternal ? "_blank" : target}
            rel="noreferrer"
            className={cn("gradient-href", className, { "gradient-href--disabled": disabled })}
        >
            {/* @ts-ignore */}
            {children}
        </a>
    ) : (
        <div
            onClick={onClick}
            id={id}
            className={cn("gradient-href gradient-href-text", className, { "gradient-href--disabled": disabled })}
        >
            {children}
        </div>
    );
};
