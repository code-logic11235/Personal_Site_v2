import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import "./App.css"
import Header from './Components/Header/header';
import About from './Components/About/about';
import Footer from './Components/Footer/footer';
import Home_v2 from './Components/Home/home_v2';
import Projects from "./Components/Projects/projects";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [isModalOpen, SetIsModalOpen] = useState(false)
  
  return (
    <Router basename={window.location.hostname === "localhost" ? "" : "/Personal_Site_v2"}>
      <Routes>
        <Route path="/" element={
         <Layout 
            isModalOpen={isModalOpen} 
            setIsModalOpen={SetIsModalOpen} 
          >
             <Home_v2 isModalOpen={isModalOpen} setIsModalOpen={SetIsModalOpen}/>    
             <About/>
         </Layout>
        } />

        <Route path="/projects" element={
          <Layout 
            isModalOpen={isModalOpen} 
            setIsModalOpen={SetIsModalOpen} 
          >
            <Projects/>
          </Layout>
        }/> 
      </Routes>
    </Router>
  );
}

export default App;

function Layout({ children, isModalOpen, setIsModalOpen}) {
  const location = useLocation();
  // scroll to section whne click on from another page
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <>
      <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}/>
      {children}
      <Footer />
    </>
  );
}