import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Components/Nav';
import About from './Components/About';
import Portfolio from './Components/Portfolio';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        
        <Route exact path={["/", "/about"]}>
          <About />
          </Route>
          
        <Route exact path="/Portfolio">
          <Portfolio />
        </Route>
      </div>
    </Router>

  );
}

export default App;
