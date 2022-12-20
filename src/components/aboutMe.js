import React from "react";
import Me from "../assets/me.jpeg";
import "../styles/aboutMe.css";
import "../styles/container.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Section() {
  return (
    <div>
      <div className="boxContainer">
        <h2>ABOUT ME</h2>
        <img src={Me} alt="Me"></img>
        <p>
          Hello! My name is David Herring and I am a Full-Stack Web-developer
          based out of middle Tennessee! I am currently enrolled in Vanderbilt's
          coding boot-camp! I currently have one year of experience coding with
          HTML, CSS, and JavaScript and I am seeking my first job in the web
          development field!
        </p>
      </div>
    </div>
  );
}

export default Section;
