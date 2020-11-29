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
            </div>
            <div className="Bottom-portion">
                <p className="Bottom-portion--text">I program primarily in ReactJS and Django</p>
                <p className="Bottom-portion--text">I was born and raised in Canada and now reside in The Netherlands</p>
            </div>
        </div>
    );
};

export default Home;
