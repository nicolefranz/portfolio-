import React from 'react';
import '../styles/SampleWorks.css';
import project1Img from '../assets/brgy-website.png'; 
import project2Img from '../assets/airline.png'; 
import project3Img from '../assets/cinema.png'; 
import project4Img from '../assets/gym.png';

const SampleWorks = () => {
    const projects = [
        {
            title: 'Barangay Management System',
            description: 'A web platform to streamline local barangay administration.',
            languages: 'HTML, CSS, JavaScript, Bootstrap, PHP, MySQL',
            imgSrc: project1Img,
            sourceCodeLink: 'https://barangay34.wuaze.com',
        },
        {
            title: 'Airline Seat Reservation',
            description: 'A system for booking and managing airline seats.',
            languages: 'C#, MySQL',
            imgSrc: project2Img,
        },
        {
            title: 'Ticket Cinema Reservation',
            description: 'A system for booking and managing cinema tickets.',
            languages: 'HTML, CSS, JavaScript, Bootstrap, PHP, MySQL',
            imgSrc: project3Img,
        },
        {
            title: 'Gym Management System',
            description: 'Software to manage gym memberships and track member activities.',
            languages: 'C#, MySQL',
            imgSrc: project4Img,
            sourceCodeLink: 'https://github.com/nicolefranz/Gym-System',
        },
    ];
    
    return (
        <div className='samplework'>
            <h1>My Recent Works</h1>
            <div className='project-cards'>
                {projects.map((project, index) => (
                    <div className='card' key={index}>
                        <img src={project.imgSrc} alt={project.title} />
                        <div className='card-info'>
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <p><strong>Languages: </strong>{project.languages}</p>
                            <a href={project.sourceCodeLink} target="_blank" rel="noopener noreferrer">
                                <button className="source-code-btn">View Source Code</button>
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default SampleWorks;