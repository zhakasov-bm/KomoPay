import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import FeatureCard from "./components/FeatureCard";
import cards from "./data/cards";
import About from "./components/About";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Advantages from "./components/Advantages";
import Contact from "./components/contact/Contact";
import Footer from "./components/Footer";
import FeatureList from "./components/FeatureCard";

function App() {
  
  return (
    <>
      <Header />
      <Home />
      <FeatureList />
      <About />
      <Services />
      <Partners />
      <Advantages />
      <Contact />
      <Footer />
    </>
  );
}

export default App;