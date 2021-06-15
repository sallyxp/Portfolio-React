import React, { Component } from 'react';
//import { HashRouter as Router, Route } from "react-router-dom";


import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"
import Wrapper from "./components/Wrapper";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <Navbar />
      </Wrapper>
    </div>
  );
}

export default App;
