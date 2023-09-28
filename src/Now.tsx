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
                                I also try to speak Dutch whenever possible
                            </li>
                            <li>
                                Programming:  I've been working through the online courses at 
                                craftinginterpreters.com 
                                <a href="https://craftinginterpreters.com/" target="_blank" rel="noopener noreferrer">Crafting Interpreters</a>
                                and 
                                <a href="https://pages.cs.wisc.edu/~remzi/OSTEP/" target="_blank" rel="noopener noreferrer">Operating Systems: Three Easy Pieces</a>
                                as low-level programming is something I've been interested in recently.
                            </li>
                            <li>
                                Gaming:  I'm a big The Legend of Zelda fan and have been playing 
                                The Legend of Zelda: Tears of the Kingdom since it's release.  
                                I've beaten the main story line but there is still much more to do in the game.
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
