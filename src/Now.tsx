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
                        <p>Last updated: 16 October 2024</p>
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
                                1984 (in Dutch), watching Flikken Rotterdam, and translating 
                                "How to Win Friends and Influence People" from English into Dutch.
                            </li>
                            <li>
                                Programming:  I'm trying to dive more deeply into C#/.NET and TypeScript/JavaScript/React.
                                I've been using these technologies for a while and feel I have a good grasp on them but I find
                                programming languages and frameworks are always deeper than we comphrehend them to be since we
                                often get used to using only a subset of the language. 
                            </li>
                            <li>
                                Gaming:  At the moment I'm playing The Legend of Zelda: Echoes of Wisdom. 
                                I'm a big Legend of Zelda fan so of course I started playing this game the day it was released
                                and so far I'm enjoying it quite a bit!
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
