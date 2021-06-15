import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";


import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper";
import 'bootstrap/dist/css/bootstrap.min.css';

import home from "./pages/home";
import about from "./pages/about";
import contact from "./pages/contact";
import resume from "./pages/resume";
import portfolio from "./pages/portfolio";

function App() {
  return (
    <div className="App fade-in">
      <Wrapper>
      <Router basename="Portfolio-React">
        <Navbar />
    
                  {/* <Switch location={location}>  */}
                 
                    <Route exact path="/" component={home} />
                    <Route exact path="/about" component={about} />
                    <Route exact path="/contact" component={contact} />
                    <Route exact path="/resume" component={resume} />
                    <Route exact path="/portfolio" component={portfolio} />
            
                {/* </Switch> */}
        </Router>
      </Wrapper>
    </div>
  );
}

export default App;
