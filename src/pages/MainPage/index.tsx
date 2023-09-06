import React from "react";

import Header from "../../sections/Header";
import JoinInput from "../../sections/JoinInput";
import StablecoinChart from "../../sections/StablecoinChart";
import Features from "../../sections/Features";
import BuiltBy from "../../sections/BuiltBy";
import Radical from "../../sections/Radical";
import Friends from "../../sections/Friends";
import Footer from "../../sections/Footer";
import HowItWorks from "../../sections/HowItWorks";
import Contacts from "../../sections/Contacts";

import "./styles.css";

const MainPage = () => {
    return (
        <div className="main-page">
            <Header />
            <JoinInput />
            <Features />
            <BuiltBy />
            <Friends />
            <HowItWorks />
            <Radical />
            <Contacts />
            <Footer />
        </div>
    );
};

export default MainPage;
