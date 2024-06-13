import React from "react";
import '../styles/AboutMe.css';

const AboutMe = () => {
    return(
        <div className="aboutme-page">
            <h1>  About Me  </h1>
            <p> Hello! I'm Nicole Frances, an aspiring cybersecurity professional 
             <br/> currently studying Computer Science at the University of Caloocan City.
             <br/> I have a keen interest in protecting digital assets and exploring the 
             <br/> latest in cybersecurity.</p>
             <a href="path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
                <button className="resume-button">Download Resume</button>
            </a>
        </div>
    );
}

export default AboutMe;