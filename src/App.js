import React from "react";
import './App.css';
import Header from "./components/Header";
import About from "./components/About"
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates"
import Hobby from "./components/Hobby";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  return (
    <div className="web-bg"> 
      <Header />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Certificates />
      <Hobby />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
