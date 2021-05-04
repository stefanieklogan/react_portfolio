import React from "react";
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <span class="navbar-brand mb-1 h1">Stefanie Logan</span>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="nav navbar-nav navbar-flex">
          <li class="nav-item">
            <a class="nav-link" href="./index.html">About Me</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./portfolio.html">Portfolio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="./contact.html">Contact</a>
          </li>
        </ul>
      </div>
    </nav>
        </div>
    );
}

export default Nav;