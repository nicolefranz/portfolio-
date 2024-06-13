import React from 'react';
import '../styles/LandingPage.css';
import linkedinLogo from '../assets/linkedin.png';
import githubLogo from '../assets/github.png';

const LandingPage = () => {
    return (
        <div className='landing-page'>
            <div className='landing-page-text'>
                <i>Hello, I'm</i>
                <h1>Nicole Frances</h1>
            </div>
            <div className='social-links'>
                <a href="https://www.linkedin.com/in/nicole-frances-meneses-3aa952251/" target="_blank" rel="noopener noreferrer">
                    <img src={linkedinLogo} alt="LinkedIn" />
                </a>
                <a href="https://github.com/nicolefranz" target="_blank" rel="noopener noreferrer">
                    <img src={githubLogo} alt="GitHub" />
                </a>
            </div>
        </div>
    );
}

export default LandingPage;
