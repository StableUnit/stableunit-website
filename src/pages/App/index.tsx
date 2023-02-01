import React from "react";

import Header from "../../sections/Header";
import JoinInput from "../../sections/JoinInput";
import StablecoinChart from "../../sections/StablecoinChart";
import Features from "../../sections/Features";
import BuiltBy from "../../sections/BuiltBy";

import "./styles.css";

const App = () => {
    return (
        <div className="App">
            <Header />
            <JoinInput />
            <StablecoinChart />
            <Features />
            <BuiltBy />
        </div>
    );
};

export default App;
