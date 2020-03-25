import React from 'react';
import './AboutMe.css';

const AboutMe: React.FC = () => {
    return (
        <div className="About-me">
            <div className="About-me-off-white-section">
                <h1>A mix of personal and professional</h1>
            </div>
            <div className="About-me-grey-section">
                <p>I was born and raised in a small town in Saskatchewan in a family of 5</p>
                <p>After high school I went to the University of Saskatchewan to study Engineering</p>
                <p>After a year of study I decided that Engineering was not for me 
                    and eventually decided on studying Computer Science
                </p>
                <p>It was then that I discovered my love of programming</p>
            </div>
            <div className="About-me-off-white-section">
                <p>It was in university that I also discovered my love of travel</p>
                <p>
                    I became friends with a few german exchange students and ended up spending Christmas break
                    on year in Germany
                </p>
                <p>
                    This time made me realise how many different lives and cultures existed in the world and 
                    it was around this time that I decided I would live abroad as soon as I could
                </p>
            </div>
            <div className="About-me-grey-section">
                <p>It was also in university that I discovered the love of my life and future wife Hailey</p>
                <p>
                    Between my second and third year I met my wife while out with a group of friends and
                    we have been together ever since.
                </p>
            </div>
            <div className="About-me-off-white-section">
                <p>My first "real" job was an intership I did at a company called Sasktel</p>
                <p>Between my third and fourth year of University I did a one year intership at this company</p>
                <p>
                    While the money was good it made me realize how much I disliked corporate cubicle work environments
                    and have vouwed never to work in an environment like that again
                </p>
            </div>
            <div className="About-me-grey-section">
                <p>
                    After completing my internship and final year of university 
                    I got a job working in my local city at a company called Vendasta
                </p>
                <p>
                    While working here I slowly transition from a university student to a real adult
                </p>
                <p>
                    I worked at Vendasta for a year and half and can say 
                    it gave me a great foundation of knowledge that I've continued to use
                </p>
            </div>
            <div className="About-me-off-white-section">
                <p>
                    While I enjoyed working at Vendasta I always kept in mind my dream of living abroad
                </p>
                <p>
                    After year and a half of work I decided I had enough industry experience and money saved up 
                    and began looking for jobs in The Netherlands
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
