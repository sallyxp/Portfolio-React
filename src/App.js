import React from 'react';
import { HashRouter as Router, Route } from "react-router-dom";


import logo from './logo.svg';
import './App.css';

import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper";
import Footer from "./components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Resume from "./pages/resume";
import Portfolio from "./pages/portfolio";

// import fontawesome from '@fortawesome/fontawesome';

// import regular from '@fortawesome/free-regular-svg-icons'
// import solid from '@fortawesome/free-solid-svg-icons'
// import brands from '@fortawesome/free-brands-svg-icons'

// fontawesome.library.add(regular)
// fontawesome.library.add(solid)
// fontawesome.library.add(brands)

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
                
            <Footer />
        </Router>
      </Wrapper>
    </div>
  );
}

export default App;
