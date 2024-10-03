import React from "react";
import "./App.css"
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import About from './Components/About/about';
import Footer from './Components/Footer/footer'
import Skills from './Components/Skills/skills'
function App() {
  

  return (
    <>
      <Header/>
      <Home/>    
      <About/>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App;
