import React from "react";
import cn from "classnames";

import { handleHrefClick } from "../../utils/click";

import "./styles.scss";

interface HeaderDropdownProps {
    onClose: () => void;
    visible: boolean;
    isInline?: boolean;
    className?: string;
}

type LinkType = { name: string; url?: string; disabled: boolean };

const LINKS = [
    { name: "Safe Transfer", url: "https://safetransfer.cash", disabled: false },
    { name: "DAO", disabled: true },
    { name: "Insight", disabled: true },
] as LinkType[];

const HeaderDropdownContent = ({ isInline, className }: Omit<HeaderDropdownProps, "visible" | "onClose">) => {
    return (
        <div className={cn("header-dropdown", className, { "header-dropdown--inline": isInline })}>
            {LINKS.map((v) => (
                <div
                    className={cn("header-dropdown__line", { "header-dropdown__line--disabled": v.disabled })}
                    onClick={v.url ? handleHrefClick(v.url) : undefined}
                >
                    <div className="header-dropdown__line__text">{v.name}</div>
                    {v.disabled && <div className="header-dropdown__line__text--soon">soon</div>}
                </div>
            ))}
        </div>
    );
};

export const HeaderDropdown = ({ visible, onClose, isInline, ...restProps }: HeaderDropdownProps) => {
    // eslint-disable-next-line no-nested-ternary
    return isInline ? (
        visible ? (
            <HeaderDropdownContent {...restProps} isInline />
        ) : null
    ) : (
        <div
            className={cn("header-dropdown-container", {
                "header-dropdown-container--visible": visible,
            })}
            onClick={onClose}
        >
            <HeaderDropdownContent {...restProps} />
        </div>
    );
};
