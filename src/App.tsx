import React from 'react';
import './App.css';
import photo from './personal_photo.jpeg';

const App: React.FC = () => {
    return (
        <div className="App-body">
            <div className="Header-bar">
                <div className="Header-bar-div">
                    <a className="Link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sheameyers/">LinkedIn</a>
                </div>
                <div className="Header-bar-div">
                    <a className="Link" target="_blank" rel="noopener noreferrer" href="https://github.com/SheaMeyers">Github</a>
                </div>
                <div className="Header-bar-div">
                    <a className="Link" target="_blank" rel="noopener noreferrer" href="https://opportunity-cost-calculator.com">Opportunity Cost Calculator</a>
                </div>
            </div>
            <div className="Main-body">
                <img className="Photo" src={photo} alt="logo"/>
                <div className="Main-body-text">
                    <h3>About Me</h3>
                    <p>Hello, my name is Shea Meyers and I am a full stack web developer</p>
                    <p>My programming interests are primarily related to ReactJS, NodeJS, and Python/Django</p>
                    <p>I'm also interested in Docker and Kubernetes (this site is hosted using Google Kubernetes Engine)</p>
                    <p>Born and raised in Canada I now reside in The Netherlands</p>
                </div>
            </div>
        </div>
    );
};

export default App;
