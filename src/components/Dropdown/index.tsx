import React, { useState } from "react";
import cn from "classnames";

import { ArrowDownIcon } from "../../icons";

import "./styles.scss";

type DropdownType = {
    className?: string;
    classNameContent?: string;
    title: string;
    children: React.ReactNode;
};

const Dropdown = ({ className, classNameContent, title, children }: DropdownType) => {
    const [isOpen, setIsOpen] = useState(false);

    const onOpen = () => {
        setIsOpen(true);
    };
    const onClose = () => {
        setIsOpen(false);
    };

    return (
        <div className={cn("dropdown", className)}>
            <div
                className={cn("dropdown__title", isOpen && "dropdown__title--open")}
                onClick={isOpen ? onClose : onOpen}
            >
                <div>{title}</div>
                <ArrowDownIcon />
            </div>
            {isOpen ? <div className={cn("dropdown__content", classNameContent)}>{children}</div> : null}
            {isOpen ? <div className="dropdown__backdrop" onClick={onClose} /> : null}
        </div>
    );
};

export default Dropdown;
