import React, { useEffect, useState } from "react";
import { Navbar, DesktopNav, Hero, Footer, ScrollToTop, Geofilters } from "./components";
import { About, Projects } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
      <ScrollToTop />
      <>
        {mobileDisplay ? (
          <Navbar setMenuOpen={setMenuOpen} menuOpen={menuOpen} />
        ) : (
          <DesktopNav />
        )}
        <div className={menuOpen ? "hidden content" : "content"}>
          <Switch>
            <Route path="/" exact>
              <Hero />
            </Route>
          </Switch>
          <Switch>
            <Route path="/about" exact>
              <About />
            </Route>
          </Switch>
          <Switch>
            <Route path="/portfolio" exact>
              <Projects />
            </Route>
          </Switch>
          <Switch>
            <Route path="/geofilters" exact>
              <Geofilters />
            </Route>
          </Switch>
        </div>
        <Footer />
      </>
    </Router>
  );
}

export default App;
