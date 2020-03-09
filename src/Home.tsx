import React from 'react';
import { Link } from 'react-router-dom';
import photo from './personal_photo.jpeg';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="Home-body">
            <div className="Header-bar">
                <div className="Header-bar--link-group">
                    <div className="Header-bar--link-div">
                        <Link className="Link" to={'/about-me'}>About Me</Link>
                    </div>
                    <div className="Header-bar--link-div">
                        <Link className="Link" to={'/project'}>Projects</Link>
                </div>
                </div>
                <div className="Header-bar--link-group">
                    <div className="Header-bar--link-div">
                        <a className="Link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sheameyers/">LinkedIn</a>
                    </div>
                    <div className="Header-bar--link-div">
                        <a className="Link" target="_blank" rel="noopener noreferrer" href="https://github.com/SheaMeyers">Github</a>
                    </div>
                </div>
            </div>
            <div className="Quick-summary">
                <img className="Quick-summary--photo" src={photo} alt="logo"/>
                <div className="Quick-summary--text">
                    <h1 className="Quick-summary--header">
                        Hello, my name is <span className="Quick-summary--highlight">Shea Meyers</span>
                    </h1>
                    <h1 className="Quick-summary--header">
                        and I am a <span className="Quick-summary--highlight">Full Stack Web Developer</span>
                    </h1>
                </div>
            </div>
            <div className="Bottom-portion">
                    <p className="Bottom-portion--text">My programming interests are primarily related to ReactJS, NodeJS, and Python/Django</p>
                    <p className="Bottom-portion--text">I'm also a big fan of in Docker and Kubernetes</p>
                    <p className="Bottom-portion--text">Born and raised in Canada I now reside in The Netherlands</p>
            </div>
        </div>
    );
};

export default Home;
