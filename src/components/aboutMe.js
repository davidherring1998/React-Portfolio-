import React from 'react';
import Me from '../assets/me.jpeg'
import '../styles/aboutMe.css';
import '../styles/container.css'

function Section() {
  return (
    <div>
      <div className='boxContainer'>
      <h2>ABOUT ME:</h2>
      <img src={Me} alt="Me"></img>
      <p>
        Hello! My name is David Herring and I am a Full-Stack Web-developer!
        I am currently enrolled in Vanderbilt's coding boot-camp !
      </p>
      <p> is simply dummy text of the printing and typesetting industry. 
        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
        when an unknown printer took a galley of type and scrambled it to make a type 
        specimen book. It has survived not only five centuries, but also the leap into 
        electronic typesetting, remaining essentially unchanged. It was popularised in 
        he 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
  );
}

export default Section;