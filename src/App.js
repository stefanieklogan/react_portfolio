import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from './Components/Nav';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Footer from './Components/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />

        <Route exact path={["/", "/about"]} component={About}>
          <About />
          </Route>
          
        <Route exact path="/portfolio" component={Portfolio}>
          <Portfolio />
        </Route>
      </div>
      <Footer />
    </Router>

  );
}

export default App;
