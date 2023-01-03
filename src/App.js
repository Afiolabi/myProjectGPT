import React from "react";

import { Article, Brand, CTA, Feature, Navbar, Scrollbar } from "./components";

import {
  Blog,
  Features,
  Footer,
  Header,
  Possibility,
  WhatGPT3,
} from "./containers";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Scrollbar />
      <div className="gradient__bg">
        <Navbar />
      </div>
      <div className="gradient__bg">
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
