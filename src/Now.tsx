import React from 'react';
import HeaderBar from './HeaderBar';
import './Now.css';

const Now: React.FC = () => {
    return (
        <div className="Now">
            <HeaderBar />
            <div className="Now">
                <div className="Now--non-white-section">
                    <h2 className="Now--header">What am I doing now?</h2>
                </div>
                <div className="Now--white-section">
                    <h3 className="Now--sub-header">
                        I try to keep this page current about what I'm doing at the current moment
                    </h3>
                    <h4 className="Left-padding">So, what I'm doing:</h4>
                    <ul>
                        <li>
                            Learning Dutch.  I do this my reading books, watching TV, and writing.  
                            I'm currently looking for a language partner to speak Dutch with since I 
                            speak English at both work and home
                        </li>
                        <li>
                            Renovating.  I bought a condo about a year ago which I'm been slowly renovating ever since.
                            Now it's mostly painting so hopefully this will be done soon
                        </li>
                        <li>
                            Working.  I work a full time job so that takes a good part of my day
                        </li>
                    </ul>
                    <p className="Left-padding">
                        Otherwise I spend my free time however I want to.  
                        This includes exercising, programming, watching Netflix, spending time with my wife, 
                        and anything else that I decide I want to do. 
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Now;
