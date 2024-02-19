import React from "react";
import './app.css'
import Navbar from "./components/Navbar";
import Content from "./components/Content";
import Skills from './components/Skills'
import Projects from './components/projects'
import About from './components/about'
import ContactMe from './components/contactme'
import Footer from "./components/Footer";

function App() {
  return (
    
    <>
      <div class="background">       
      <Navbar></Navbar>
      <Content></Content>
      <Skills></Skills>
      <Projects></Projects>
      <About></About>
      <ContactMe></ContactMe>
      <Footer></Footer>
      </div>
    </>  
    
  );
}

export default App;
