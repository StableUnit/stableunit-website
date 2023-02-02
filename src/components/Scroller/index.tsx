import React from "react";

import "./styles.scss";

type HrefProps = {
    children: React.ReactNode;
};

const Scroller = ({ children }: HrefProps) => (
    <div className="scroller-container">
        <div className="scroller">{children}</div>
    </div>
);

export default Scroller;
