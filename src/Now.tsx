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
                            Learning Dutch.  I do this by reading books, watching TV, and writing.  
                            I also try to speak Dutch with people whenever possible but with the current
                            covid situation this is difficult
                        </li>
                        <li>
                            Programming.  While I work as a software developer I always have some app ideas
                            I'm interested in building or new technology I want to explore
                        </li>
                        <li>
                            Working.  I work a full time job so that takes a good part of my day
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
    );
};

export default Now;
