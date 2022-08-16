import React from "react";
import About from "./Components/About";
import Carosal from "./Components/Carosal";
import Contacts from "./Components/Contacts";
import Customers from "./Components/Customers";
import Experience from "./Components/Experience";
import Flow from "./Components/Flow";
import Flowing from "./Components/Flowing";
import Footer from "./Components/Footer";
import Map from "./Components/Map";
import Navigations from "./Components/Navigations";
import Projects from "./Components/Projects";
import Services from "./Components/Services";
import Technology from "./Components/Technology";

function App() {
  return (
    <>
      <Navigations />
        <About />
        <Customers />
        <Projects />
        <Flow />
        <Technology />
        <Experience />
        <Services />
        <Flowing />
        <Contacts />
        {/* <Map /> */}
        <Carosal />
        <Footer />
    </>
  );
}

export default App;
