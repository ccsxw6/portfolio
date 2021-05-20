import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import Headshot from "./images/Headshot.jpg"
import Down from "./images/down.png"

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Developer", "Designer", "Content Creator"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={Headshot} alt="Headshot" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello! I'm</h2>
          <h1>Chris Stanfill</h1>
          <h3>
            Software <span ref={textRef}></span>
          </h3>
        {/* correlates to the id about in the about component */}
        <a href="#about">
          <img src={Down} alt="arrow" />
        </a>
        </div>
      </div>
    </div>
  );
}
