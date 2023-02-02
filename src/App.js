import React, { useEffect, useState } from "react";
import { Navbar, DesktopNav, Hero, Footer, ScrollToTop, Geofilters } from "./components";
import { About, Projects } from "./pages";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import "./App.css";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileDisplay, setMobileDisplay] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    width > 1024 ? setMobileDisplay(false) : setMobileDisplay(true);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <Router>
      {mobileDisplay ? (
        <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
      ) : (
        <DesktopNav />
      )}
      <div className={menuOpen ? "hidden content" : "content"}>
        <Routes>
          {/* <ScrollToTop /> */}
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/portfolio" element={<Projects />} />
          <Route path="/geofilters" element={<Geofilters />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
