import React from 'react';
import HeaderBar from './HeaderBar';
import './Now.css';

const Now: React.FC = () => {
    return (
        <div className="Now">
            <HeaderBar />
            <div className="Now--white-section Now--hero-section">
                <div className="Now--hero-content">
                    <a href="https://nownownow.com/p/dYg2" target="_blank" rel="noopener noreferrer">This is my now page!</a>
                    <p>Last updated: 22 July 2026</p>
                </div>
            </div>
            <div className="Now--non-white-section">
                <h2 className="Now--header">What am I doing now?</h2>
            </div>
            <div className="Now--white-section">
                <div className="Now--margins">
                    <h3 className="Now--sub-header">
                        I try to keep this page current about what I'm doing at the moment
                    </h3>
                    <h4 className="Left-padding">So, what I'm doing:</h4>
                    <ul>
                        <li>
                            Baby Prep!
                            My wife is pregnant so we are doing all we can to prepare.
                            Thankfully we have good friends who have given us a lot of second hand stuff that we are so grateful to get.
                        </li>
                        <li>
                            Programming:  I just built new projects  
                            <a style={{margin: '0.3rem'}} href="https://dutchpractice.com/" target="_blank" rel="noopener noreferrer">Dutch Practice</a>
                            and <a style={{margin: '0.3rem'}} href="https://translatedstories.com/" target="_blank" rel="noopener noreferrer">Translated Stories</a> <br />
                        </li>
                        <li>
                            Reading:  I've been getting into reading more lately and have been reading the classical famous books.  Most recently 
                            I finished reading Crime & Punishment and The Trial, both which I very much enjoyed for different reasons.  Now I'm reading
                            A Tale of Two Cities and afterwards plan to read The Great Gasby and Oliver Twist.
                        </li>
                    </ul>
                    <p className="Left-padding">
                        Otherwise I spend my free time however I want to.  
                        This includes spending time with my wife, cat, and friends, exercising, gaming,
                        watching TV, and anything else that I decide I want to do. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Now;
