import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import "./App.css"
import Header from './Components/Header/header';
import About from './Components/About/about';
import Footer from './Components/Footer/footer';
import Home_v2 from './Components/Home/home_v2';
import Resume from './Components/Resume/resume';
import Contact from "./Components/Contact/contact";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  // const [isDM, SetIsDM] = useState(false);
  const [isModalOpen, SetIsModalOpen] = useState(false)
  return (
    <Router basename={window.location.hostname === "localhost" ? "" : "/Personal_Site_v2"}>
      <Routes>
        <Route path="/" element={
         <Layout >
             <Home_v2 isModalOpen={isModalOpen} setIsModalOpen={SetIsModalOpen}/>    
             <About/>
         </Layout>
        } />
        <Route path="/resume" element={
          <Layout>
            <Resume/>
          </Layout>
        }/> 
        <Route path="/contact" element={
          <Layout>
            <Contact/>
          </Layout>
        }/> 
      </Routes>
    </Router>
  );
}

export default App;

function Layout({ children }) {
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
      <Header/>
      {children}
      <Footer />
    </>
  );
}