import React from 'react';
import photo from './CroppedPhotoToUse.png';
import HeaderBar from './HeaderBar';
import './Home.css';

const Home: React.FC = () => {
    return (
        <div className="Home-body">
            <HeaderBar />
            <div>
                <img className="Photo" src={photo} alt="Shea Meyers" title="Shea Meyers"/>
            </div>
            <div className="Bottom-portion">
                <p className="Bottom-portion--text">I'm mostly experienced in ReactJS and Django</p>
                <p className="Bottom-portion--text">Born and raised in Canada I now reside in The Netherlands</p>
            </div>
        </div>
    );
};

export default Home;
