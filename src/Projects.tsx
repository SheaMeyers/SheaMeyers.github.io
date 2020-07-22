import React from 'react';
import HeaderBar from './HeaderBar';
import './Projects.css';

const Projects: React.FC = () => {
    return (
        <div className="Projects-page">
            <HeaderBar />
            <div className="About-me-grey-section">
                <h2>Projects</h2>
                <p>These are a variety of projects I've worked on in my spare time</p>
            </div>
            <div className="About-me-off-white-section">
                <h3>Indecision App</h3>
                <p>Allows you to give a set of decisions and randomly decides a decision for you</p>
                <a href="https://sheameyers.com/react-indecision-app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/SheaMeyers/react-indecision-app" target="_blank" rel="noopener noreferrer">Code Repository</a>
            </div>
            <div className="About-me-grey-section">
                <h3>Expensify App</h3>
                <p>Allows you to track expenses</p>
                <a href="https://sheameyers.com/react-expensify-app" target="_blank" rel="noopener noreferrer">Live Demo</a>
                <a href="https://github.com/SheaMeyers/react-expensify-app" target="_blank" rel="noopener noreferrer">Code Repository</a>
            </div>
            <div className="About-me-off-white-section">
                <h3>TypeORM User Microservice</h3>
                <p>A starter microservice for managing users, built with TypeORM </p>
                <a href="https://github.com/SheaMeyers/typeorm-user-microservice" target="_blank" rel="noopener noreferrer">Code Repository</a>
            </div>
            <div className="About-me-grey-section">
                <h3>Simple Banking App</h3>
                <p>A simple banking application built in Ruby on Rails</p>
                <a href="https://github.com/SheaMeyers/simple-banking-app" target="_blank" rel="noopener noreferrer">Code Repository</a>
            </div>
            <div className="About-me-off-white-section">
                <h3>PatchmanBlog</h3>
                <p>A blogging app built in Django</p>
                <a href="https://github.com/SheaMeyers/PatchmanBlog" target="_blank" rel="noopener noreferrer">Code Repository</a>
            </div>
            <div className="About-me-grey-section">
                <h3>Others</h3>
                <p>You can find the other projects I've worked on on my personal Github account</p>
                <a href="https://github.com/SheaMeyers" target="_blank" rel="noopener noreferrer">My Github</a>
            </div>
        </div>
    );
};

export default Projects;
