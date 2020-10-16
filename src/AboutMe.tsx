import React from 'react';
import HeaderBar from './HeaderBar';
import './AboutMe.css';

const AboutMe: React.FC = () => {
    return (
        <div className="About-me">
            <HeaderBar />
            <div className="About-me-section">
                <h2>A Quick Overview</h2>
            </div>
            <div className="About-me-non-white-section">
                <p className='About-me-sentence'>I was born and raised in a small town in Saskatchewan in a family of 5</p>
                <p className='About-me-sentence'>After high school I went to the University of Saskatchewan to study engineering</p>
                <p className='About-me-sentence'>I decided that engineering was not for me after a year of study and 
                eventually decided on studying computer science
                </p>
            </div>
            <div className="About-me-section">
                <p className='About-me-sentence'>It was then that I discovered my love of programming and also discovered my love of travel</p>
                <p className='About-me-sentence'>
                    I became friends with a few German exchange students and ended up spending Christmas break
                    one year in Germany
                </p>
                <p className='About-me-sentence'>
                    This time made me realise how many different lives and cultures existed in the world and 
                    I decided I would live abroad as soon as I could
                </p>
            </div>
            <div className="About-me-non-white-section">
                <p className='About-me-sentence'>It was also in university that I met the love of my life and future wife Hailey</p>
                <p className='About-me-sentence'>
                    Between my second and third year I met my wife while out with a group of friends and
                    we have been together ever since
                </p>
            </div>
            <div className="About-me-section">
                <p className='About-me-sentence'>
                    My first "real" job was a year long intership I did at a company called Sasktel between my third and 
                    fourth year of university
                </p>
                <p className='About-me-sentence'>
                    While the money was good it made me realize how much I disliked corporate cubicle work environments
                    and have vouwed never to work in an environment like that again
                </p>
            </div>
            <div className="About-me-non-white-section">
                <p className='About-me-sentence'>
                    After completing my internship and final year of university 
                    I got a job working in my local city at a company called Vendasta
                </p>
                <p className='About-me-sentence'>
                    I worked at Vendasta for a year and half and
                    it gave me a great foundation of knowledge that I've continued to use
                </p>
            </div>
            <div className="About-me-section">
                <p className='About-me-sentence'>
                    While I enjoyed working at Vendasta I always kept in mind my dream of living abroad
                </p>
                <p className='About-me-sentence'>
                    I worked at Vendasta for a eighteen months and decided I had enough industry experience and money saved up 
                    so I began looking for jobs in The Netherlands
                </p>
            </div>
            <div className="About-me-non-white-section">
                <p className='About-me-sentence'>
                    After many job applications and a few interviews I received a job working with the company Calendar42,  
                    which would eventually be rebranded to Toogethr.
                </p>
                <p className='About-me-sentence'>
                    I worked with Toogethr for three and half years and decided I wanted a new challenge and got a 
                    new job where I am currently working, Maykin Media
                </p>
            </div>
            <div className="About-me-section">
                <p className='About-me-sentence'>
                    One of the best benefits to living in the Netherlands was the easy ability to travel
                </p>
                <p className='About-me-sentence'>
                    Since living here my wife and I have been able to visit 13 countries
                </p>
                <p className='About-me-sentence'>
                    Belgium, France, Germany, Italy, Greece, Spain, Portugal, 
                    England, Ireland, Scotland, Norway, Sweden, and Denmark
                </p>
            </div>
            <div className="About-me-non-white-section">
                <p className='About-me-sentence'>
                    For now I simply continue to enjoy life
                </p>
            </div>
            <div className="About-me-section">
                <p className='About-me-sentence'>
                    Professionally I'm always interested in learning and develop new skills
                </p>
            </div>
            <div className="About-me-non-white-section">
                <p className='About-me-sentence'>
                    Personally I continue to integrate into Dutch culture and
                </p>
                <p className='About-me-sentence'>
                    while I've passed both the inburgerings (integration) examns and staatsexams (state exams)
                </p>
                <p className='About-me-sentence'>
                    I still feel there is much to learn about both the language and culture
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
