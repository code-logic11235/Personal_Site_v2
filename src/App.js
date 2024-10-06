import React from "react";
import "./App.css"
import Header from './Components/Header/header';
// import Home from './Components/Home/home';
import About from './Components/About/about';
import Footer from './Components/Footer/footer'
import Skills from './Components/Skills/skills'
import Home_v2 from './Components/Home/home_v2'
function App() {
  

  return (
    <>
      <Header/>
      <Home_v2/>    
      <About/>
      <Skills/>
      <Footer/>
    </>
  )
}

export default App;
