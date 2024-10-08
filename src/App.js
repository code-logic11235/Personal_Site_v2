import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"
import Header from './Components/Header/header';
// import Home from './Components/Home/home';
import About from './Components/About/about';
import Footer from './Components/Footer/footer'
import Skills from './Components/Skills/skills'
import Home_v2 from './Components/Home/home_v2'
import Resume
 from "./Components/Resume/resume";
function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element={
         <Layout>
             <Home_v2/>    
             <About/>
             <Skills/>
         </Layout>
        } />
        <Route path="/resume" element={
          <Layout>
            <Resume/>
          </Layout>
        }/> 
      </Routes>
    </Router>
  )
}

export default App;

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}