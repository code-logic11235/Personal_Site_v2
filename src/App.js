import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import "./App.css"
import Header from './Components/Header/header';
import About from './Components/About/about';
import Footer from './Components/Footer/footer';
import Home_v2 from './Components/Home/home_v2';
import Resume from './Components/Resume/resume';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
function App() {
  const [isDM, SetIsDM] = useState(false);
  return (
    <Router basename={window.location.hostname === "localhost" ? "" : "/Personal_Site_v2"}>
      <Routes>
        <Route path="/" element={
         <Layout>
             <Home_v2/>    
             <About/>
         </Layout>
        } />
        <Route path="/resume" element={
          <Layout>
            <Resume/>
          </Layout>
        }/> 
      </Routes>
    </Router>
  );
}

export default App;

function Layout({ children }) {
  const location = useLocation();

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
      <Header />
      {children}
      <Footer />
    </>
  );
}