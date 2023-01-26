import React from 'react';

import Header from "../../sections/Header";
import JoinInput from "../../sections/JoinInput";
import StablecoinChart from "../../sections/StablecoinChart";
import Features from "../../sections/Features";

import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <JoinInput />
      <StablecoinChart />
      <Features />
    </div>
  );
}

export default App;
