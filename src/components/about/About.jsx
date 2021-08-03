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
                Apps, MongoDB, MySQL, Git. In addition to honing my current skills, I am learning Typescript, and I plan on learning Python, Java, C#, PHP and more.
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
                <p>Feel free to email or call me and checkout my <a target="_blank" rel="noopener noreferrer" href="https://docs.google.com/document/d/1fFxGXwVXVFoayrG3xizGgIz9qpukwLN70RR0RiDbqZ8/edit?usp=sharing">Resume</a> or <a target="_blank" rel="noopener noreferrer" href="https://github.com/ccsxw6">Github</a> and <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/christopherstanfill/">Linkedin</a> accounts.</p>
            </div>
        </div>
    // </div>
  );
}

export default About;
