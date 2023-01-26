import React from 'react';
import Header from "../../sections/Header";
import JoinInput from "../../sections/JoinInput";
import StablecoinChart from "../../sections/StablecoinChart";

import './styles.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <JoinInput />
      <StablecoinChart />
    </div>
  );
}

export default App;
