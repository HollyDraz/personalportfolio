// src/App.js

import React from "react";
import About from "./components/About";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}