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
                    <p>Last updated: 26 April 2026</p>
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
                            My wife is recently pregnant so we are doing all we can to prepare.
                            Thankfully we have good friends who have given us a lot of second hand stuff that we are so grateful to get.
                        </li>
                        <li>
                            Learning Dutch:  I do this by reading books, watching TV, and writing.  
                            I also try to speak Dutch whenever possible.  Right now I'm reading
                            The Witcher series (in Dutch), watching the Dutch TV show Dertigers, and translating 
                            "The Trial" by Franz Kafka from English into Dutch.
                        </li>
                        <li>
                            Programming:  I just built a new project at 
                            <a style={{margin: '0.3rem'}} href="https://dutchpractice.com/" target="_blank" rel="noopener noreferrer">Dutch Practice</a> <br />
                            I'm also planning to add more activities to the website.
                        </li>
                        <li>
                            Gaming:  At the moment I'm playing The Witcher #3: Wild Hunt.
                            I've beaten it, including the expansions, once before but I found it so fun I'm playing it again
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
    );
};

export default Now;
