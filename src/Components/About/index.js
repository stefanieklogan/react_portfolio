import React from "react";
import './style.css';
import { NavLink } from "react-router-dom";

function About() {
    return (
        <div>
            <div class="container pb-1">
                <h2 class="h2 px-1 pt-3 pb-2 text-left">About Me</h2>
                <div class="row mb-0">
                    <div class="col-12 text-center">
                        <img class="allimages mx-2 my-1" alt="Stefanie whisper" src="./images/stefanie_left.jpg"/>
                            <img class="allimages mx-2 my-1" alt="Stefanie surprise" src="./images/stefanie_center.jpg"/>
                                <img class="allimages mx-2 my-1" alt="Stefanie whisper" src="./images/stefanie_right.jpg"/>
          </div>
      </div>
    
                                <p class="aboutme_p mx-1">Extra! Extra! Read all about it! Stefanie has gone coding!</p>
                                <p class="aboutme_p mx-1">Welcome to my webpage! Take a peek at my <NavLink className="mouse" to="/portfolio"> portfolio</NavLink> page or <NavLink className="mouse" src="https://github.com/stefanieklogan">Github</NavLink> to see what recent designs I’ve been up to.
                                    Ready to collaborate? Head to my <a href="./contact.html" class="mouse">Contact</a> page to reach out.</p>
                                    <p>My journey extends beyond coding, see where I've worked on my <a href="./resume.pdf" class="mouse">Resume </a>and <a href="https://www.linkedin.com/in/stefanie-logan-5809a2104/" class="mouse">LinkedIn</a> account.</p>
                                    <p class="aboutme_p mx-1">I set out on a new journey to learn what it takes to become a web developer and I look forward to designing for you!
  </p>
                                    <p class="aboutme_p mx-1">- Stefanie</p>
  </div>
        </div>
    );
}

export default About;