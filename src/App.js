import React from "react";
import "./App.css";
import Home from "./routes/home"
import Contact from "./routes/contact"
import About from "./routes/about"
import Projects from "./routes/projects"
import {Route,Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import Skills from "./routes/skills";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/Skills" element={<Skills />} />
      </Routes>
      <Projects />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
