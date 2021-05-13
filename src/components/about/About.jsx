/* eslint-disable no-lone-blocks */
import React from "react";
import "./about.scss";
import Doppelgänger from "./media/DerDoppelgänger.mp3"
import Johanna from "./media/Johanna.mp3"

function About() {
  return (
    <div className="aboutContainer" id="about">

        {/* <div className="aboutText"> */}
            <div className="bio">
                <h1>About Me!</h1>
                <p>
                I am a software developer based in St. Louis, Missouri. I have an extensive background in music and opera,
                which provides me with a unique perspective on how to work in a
                creative, team-oriented environment. After completing
                the Full Stack Web Development program from the Washington University
                Coding Boot Camp, I am proficient in HTML5, CSS3,
                JavaScript, jQuery, Express.js, React.js, Node.js, Progressive Web
                Apps, MongoDB, MySQL, Git. I am currently learning Python, Java, C#,
                PHP and more.
                </p>
                <p>
                Before becoming a software developer, I made a living as a musician.
                I've had the pleasure of performing throughout the United States in
                various operatic roles and as a concert soloist. Here are a 
                couple audio clips accompanied by Joseph Eckelkamp.              
                </p>
                {/* <br /> */}
                <div className="audioFiles">
                    <audio controls>
                        {/* <source src={Doppelgänger} type="audio/mpeg" /> */}
                        <source src={Johanna} type="audio/mpeg" />
                    </audio>
                    <audio controls>
                        <source src={Doppelgänger} type="audio/mpeg" />
                    </audio>
                </div>
                {/* <br /> */}
                <p>Feel free to email or call me and checkout my <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1tDphDI-Skk4qkBMngADISuTCDhGC2-5yOpPIQS1LrTs/edit?usp=sharing">Resume</a> or <a target="_blank" rel="noopener noreferrer" href="https://github.com/ccsxw6">Github</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/christopherstanfill/">Linkedin</a> accounts.</p>
            </div>
        </div>
    // </div>
  );
}

export default About;

{
  /* <h4 className="card-title">Chris Stanfill, Software Developer</h4>

<p className="card-text">
  I am a software developer based in St. Louis, Missouri. I am currently
  earning a certificate in Full Stack Web Development from the Washington
  University Coding Boot Camp. I have an extensive background in music and
  opera, which provides me a unique perspective on how to work in a
  creative, team-oriented environment.
</p>
<p>
  After completing the Bootcamp, I will be a Full Stack Developer
  proficient in HTML5, CSS3, JavaScript, jQuery, Express.js, React.js,
  Node.js, Progressive Web Apps, Database Theory, MongoDB, MySQL, Git,
  Python, Java, C#, PHP and more.
</p>

<a href="https://docs.google.com/document/d/1tDphDI-Skk4qkBMngADISuTCDhGC2-5yOpPIQS1LrTs/edit?usp=sharing">
  Resume
</a>

<div className="container text-center">
  <div className="card-footer justify-content-center">
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.linkedin.com/in/christopherstanfill/"
    >
      <i class="fab fa-linkedin fa-3x"></i>
    </a>
    <a
      target="_blank"
      rel="noopener noreferrer"
      href="https://github.com/ccsxw6"
    >
      <i class="fab fa-github-square fa-3x"></i>
    </a>
  </div>
</div> */
}
