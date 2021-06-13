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
                                I also try to speak Dutch whenever possible but with the current
                                covid situation this is difficult
                            </li>
                            <li>
                                Projects:  On my home page you'll some of these projects.
                                Now that these are created I'm studying the marketing involved in getting
                                users to find your project and to start using them.
                            </li>
                            <li>
                                Gaming:  My wife and I got a Nintendo Switch for Christmas so I've been
                                playing video games, especially "The Legend of Zelda: Breath of the Wild"
                            </li>
                        </ul>
                        <p className="Left-padding">
                            Otherwise I spend my free time however I want to.  
                            This includes spending time with my wife, cat, and friends, exercising, reading,
                            watching Netflix, and anything else that I decide I want to do. 
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Now;
