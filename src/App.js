import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";


import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="App fade-in">
      <Wrapper>
      <Router basename={process.env.PUBLIC_URL}>
        <Navbar />
    
                  {/* <Switch location={location}>  */}
                 
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/contact" component={Contact} />
                    <Route exact path="/resume" component={Resume} />
                    <Route exact path="/portfolio" component={Portfolio} />
            
                {/* </Switch> */}
        </Router>
      </Wrapper>
    </div>
  );
}

export default App;
