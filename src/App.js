import React, { useEffect, useState } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import "./App.css";
import Header from './Components/Header/header';
import About from './Components/About/about';
import Footer from './Components/Footer/footer';
import Home_v2 from './Components/Home/home_v2';
import Projects from "./Components/Projects/projects";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  const [isModalOpen, SetIsModalOpen] = useState(false);
  
  return (
   <Router>
      <Layout 
        isModalOpen={isModalOpen} 
        setIsModalOpen={SetIsModalOpen}
      >
        <Routes>
          <Route path="/" element={<Home_v2 isModalOpen={isModalOpen} setIsModalOpen={SetIsModalOpen} />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

function Layout({ children, isModalOpen, setIsModalOpen }) {
  const location = useLocation();

  // Scroll to section when clicking on a link from another page
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
      <Header isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {children}
      <Footer />
    </>
  );
}