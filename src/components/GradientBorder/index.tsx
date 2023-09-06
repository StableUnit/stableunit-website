import React from "react";
import cn from "classnames";

import "./styles.scss";

interface GradientBorderProps {
    className?: string;
    borderRadius?: number;
    children?: React.ReactNode;
    style?: Record<any, any>;
}

export const GradientBorder = React.forwardRef<HTMLDivElement, GradientBorderProps>(
    ({ className, children, borderRadius, style = {}, ...props }, ref) => {
        const childrenWithProps = React.Children.map(children, (child) => {
            // Checking isValidElement is the safe way and avoids a TS error too.
            if (React.isValidElement(child)) {
                const newBorderRadius = borderRadius ? borderRadius - 1 : 0;
                return React.cloneElement(child, {
                    ...child.props,
                    style: { ...child.props.style, borderRadius: newBorderRadius },
                });
            }

            return child;
        });

        return (
            <div className={cn("gradient-border", className)} style={{ borderRadius, ...style }} {...props} ref={ref}>
                {childrenWithProps}
            </div>
        );
    }
);
