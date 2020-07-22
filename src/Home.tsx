import React from 'react';
import photo from './personal_photo.jpeg';
import HeaderBar from './HeaderBar';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="Home-body">
            <HeaderBar />
            <div className="Quick-summary">
                <img className="Quick-summary--photo" src={photo} alt="Shea Meyers" title="Shea Meyers"/>
                <div className="Quick-summary--text">
                    <div className="Quick-summary--header">
                        <p className="Quick-summary--non-highlight">Hello, my name is</p> <h1 className="Quick-summary--highlight">Shea Meyers</h1>
                    </div>
                    <div className="Quick-summary--header">
                        <p className="Quick-summary--non-highlight">and I am a</p> <h2 className="Quick-summary--highlight">Fullstack Web Developer</h2>
                    </div>
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
