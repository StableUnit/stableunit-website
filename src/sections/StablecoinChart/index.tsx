import React, { useState } from "react";
import { PieChart, Pie, Sector, Cell } from "recharts";

import "./styles.scss";
import { useDevice } from "../../hooks/useDimensions";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const StablecoinChart = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const data = [
        { name: "Cryptocurrencies", value: 80 },
        { name: "Stablecoins", value: 11 },
        { name: "Decentralized Stablecoins with centralized collateral", value: 6 },
        { name: "Decentralized and uncensorable stablecoins", value: 3 },
    ];

    const { isMobile } = useDevice();

    const onPieEnter = (_: any, index: number) => {
        setActiveIndex(index);
    };

    const renderActiveShape = (props: any) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, innerRadius, outerRadius, startAngle, endAngle, fill, payload, percent } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * (isMobile ? -20 : 22);
        const ey = my;
        const textAnchor = cos >= 0 ? "start" : "end";

        return (
            <g>
                <text x={cx} y={cy + 100} dy={8} textAnchor="middle" fill={fill}>
                    {payload.name}
                </text>
                <Sector
                    cx={cx}
                    cy={cy}
                    innerRadius={innerRadius}
                    outerRadius={outerRadius}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    fill={fill}
                />
                <Sector
                    cx={cx}
                    cy={cy}
                    startAngle={startAngle}
                    endAngle={endAngle}
                    innerRadius={outerRadius + 6}
                    outerRadius={outerRadius + 10}
                    fill={fill}
                />
                {!isMobile && (
                    <>
                        <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                        <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                    </>
                )}
                <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
                    {`${(percent * 100).toFixed(2)}%`}
                </text>
            </g>
        );
    };

    return (
        <div className="container">
            <div className="title">DeFi is in danger</div>
            <div className="stablecoin-chart">
                <div className="stablecoin-chart__content">
                    <div className="stablecoin-chart__content__description">
                        The collapse of centralized organizations proved the importance of decentralization. DeFi is
                        undeniably the future of finance. But DeFi itself is in danger because of the centralization of
                        base assets.
                    </div>
                    <div className="stablecoin-chart__content__description">
                        95% of stablecoins can be frozen in one single transaction by their issuers.
                    </div>
                    <div className="stablecoin-chart__content__description">
                        USD-Pro is a stablecoin from StableUnitDAO that cannot be frozen. It is overcollateralized with
                        uncensorable assets that nobody can take from you.
                    </div>
                </div>
                <div className="stablecoin-chart__chart">
                    <PieChart width={isMobile ? 250 : 400} height={isMobile ? 220 : 250}>
                        <Pie
                            activeIndex={activeIndex}
                            activeShape={renderActiveShape}
                            data={data}
                            cx="50%"
                            cy="50%"
                            innerRadius={isMobile ? 50 : 60}
                            outerRadius={isMobile ? 65 : 80}
                            dataKey="value"
                            onMouseEnter={onPieEnter}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </div>
            </div>
        </div>
    );
};

export default StablecoinChart;
