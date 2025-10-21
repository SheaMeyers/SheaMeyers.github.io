import React from 'react';
import HeaderBar from './HeaderBar';
import './Now.css';

const Now: React.FC = () => {
    return (
        <div className="Now">
            <HeaderBar />
            <div className="Now">
                <div className="Now--white-section">
                    <h6 style={{textAlign: 'center'}}>
                        <a style={{margin: '0.3rem'}} href="https://nownownow.com/p/dYg2" target="_blank" rel="noopener noreferrer">This is my now page!</a>
                        <br /><br />
                        <p>Last updated: 21 October 2025</p>
                    </h6>
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
                                Learning Dutch:  I do this by reading books, watching TV, and writing.  
                                I also try to speak Dutch whenever possible.  Right now I'm reading
                                The Witcher series (in Dutch), watching the Dutch TV show Undercover, and translating 
                                "The Trial" by Franz Kafka from English into Dutch.
                            </li>
                            <li>
                                Programming:  I just built a new project at 
                                <a style={{margin: '0.3rem'}} href="https://dutch-practice.sheameyers.com/" target="_blank" rel="noopener noreferrer">Dutch Practice</a> <br />
                                I'm also planning to add more activities to the website.
                            </li>
                            <li>
                                Gaming:  At the moment I'm playing The Witcher #3: Wild Hunt.
                                I didn't play it when it originally came out but I'm playing it now and really enjoying it
                            </li>
                        </ul>
                        <p className="Left-padding">
                            Otherwise I spend my free time however I want to.  
                            This includes spending time with my wife, cat, and friends, exercising, reading,
                            watching TV, and anything else that I decide I want to do. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Now;
