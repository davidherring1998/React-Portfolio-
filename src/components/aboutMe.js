import React from 'react';
import Me from '../assets/me.jpeg'
import '../styles/aboutMe.css';

function Section() {
  return (
    <div>
      <h2>ABOUT ME:</h2>
      <img src={Me} alt="Me"></img>
      <p>
        Hello! My name is David Herring and I am a Full-Stack Web-developer!
        I am currently enrolled in Vanderbilt's coding boot-camp! <br></br>blah blah blah
        blah blah blah blah blah blah blah blah blah blah blah blah
        blah blah blah blah blah blah blah blah blah blah blah blah 
      </p>
      </div>
  );
}

export default Section;
