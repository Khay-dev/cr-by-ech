import React, { lazy, Suspense } from "react";

// stylesheet
import "./App.css";

// react router dom
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// components
// import Home from "./components/layout/home/Home";
// import Gallery from "./components/layout/Gallery/Gallery";
// import Contact from "./components/layout/Contact/Contact";
// import Apartment from "./components/layout/Apartments/Apartment";
import ScrollToTop from "./components/layout/ScrollToTop";
import Junior from "./components/layout/Junior/Junior";
import Executive from "./components/layout/Executive/Executive";
import Presidential from "./components/layout/Presidential/Presidential";
import Orthodox from "./components/layout/Orthodox/Orthodox";
import Preloader from "./components/layout/Preloader/Preloader";

// React lazy components
const Home = lazy(() => import("./components/layout/home/Home"));
const Apartment = lazy(()=> import("./components/layout/Apartments/Apartment"));
const Gallery = lazy(()=> import("./components/layout/Gallery/Gallery"));
const Contact = lazy(()=> import("./components/layout/Contact/Contact"));

function App() {
  return (
    <Router>
      <div className="App">
        <Suspense fallback={<Preloader/>}>
          <Switch>
            <Route exact path="/">
              <ScrollToTop />
              <Home />
            </Route>
            <Route path="/gallery">
              <ScrollToTop />
              <Gallery />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/Apartment">
              <ScrollToTop />
              <Apartment />
            </Route>
            <Route path="/Junior">
              <ScrollToTop />
              <Junior />
            </Route>
            <Route path="/Executive">
              <ScrollToTop />
              <Executive />
            </Route>
            <Route path="/Presidential">
              <ScrollToTop />
              <Presidential />
            </Route>
            <Route path="/Orthodox">
              <ScrollToTop />
              <Orthodox />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
