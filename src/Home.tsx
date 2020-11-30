import React from 'react';
import photo from './CroppedPhotoToUse.png';
import HeaderBar from './HeaderBar';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="Home-body">
            <HeaderBar />
            <div className="Main-portion">
                <img className="Photo" src={photo} alt="Shea Meyers" title="Shea Meyers"/>
                <h1 className="Main-portion--name">Shea Meyers</h1>
                <h2 className="Main-portion--job">Fullstack Web Developer</h2>
                <p><i className="Down-arrow"></i></p>
            </div>
            <div className="Projects-portion">
                <h2 className="Projects-portion--title">Projects</h2>
                <p>I mostly program in ReactJS and Django.</p>
                <p>Other projects can be found on my Github.</p>
                <br/>
                <div className="Projects-portion--project__non-white-section">
                    <h3>Jobs By Education</h3>
                    <p>Find jobs by filtering on your education.  Written in Django.</p>
                    <a href="https://jobsbyeducation.com" target="_blank" rel="noopener noreferrer">https://jobsbyeducation.com</a>
                </div>
                <div className="Projects-portion--project__section">
                    <h3>Anonymous Reviewer</h3>
                    <p>Anonymously review a business and see what others have anonymously said.  Written in ReactJS and Django.</p>
                    <a href="https://anonymousreviewer.com" target="_blank" rel="noopener noreferrer">https://anonymousreviewer.com</a>
                </div>
                <div className="Projects-portion--project__non-white-section">
                    <h3>Expensify App</h3>
                    <p>Track expenses.  Written in ReactJS.</p>
                    <a href="https://sheameyers.com/react-expensify-app" target="_blank" rel="noopener noreferrer">https://sheameyers.com/react-expensify-app</a>
                </div>
                <div className="Projects-portion--project__section">
                    <h3>Indecision App</h3>
                    <p>Give a set of decisions and randomly get a decision for you.  Written in ReactJS.</p>
                    <a href="https://sheameyers.com/react-indecision-app" target="_blank" rel="noopener noreferrer">https://sheameyers.com/react-indecision-app</a>
                </div>
            </div>
        </div>
    );
};

export default Home;
