import React from 'react';
import HeaderBar from './HeaderBar';
import { Link } from 'react-router-dom';
import './AboutMe.css';

const AboutMe: React.FC = () => {
    return (
        <div className="About-me">
            <HeaderBar />
            <div className="About-me-section">
                <h2>A Quick Backstory</h2>
            </div>
            <div className="About-me-non-white-section">
                <p className="About-me-section__text">
                    I was born and raised in a small town in Saskatchewan in a family of 5.
                    After high school I attended the University of Saskatchewan to study engineering.
                    I decided that engineering was not for me after a year of study and eventually 
                    decided on studying computer science.
                </p>
            </div>
            <div className="About-me-section">
                <p className="About-me-section__text">
                    It was then that I discovered my love of programming and also my love of travel.
                    I became friends with a few German exchange students and ended up spending Christmas break
                    one year in Germany.
                    This time made me realise how many different lives and cultures existed in the world and 
                    I decided I would live abroad as soon as I could.
                </p>
            </div>
            <div className="About-me-non-white-section">
                <p className="About-me-section__text">
                    It was also in university that I met the love of my life and future wife Hailey.
                    Between my second and third year of university I met my wife while out with a group of friends and
                    we have been together ever since.
                </p>
            </div>
            <div className="About-me-section">
                <p className="About-me-section__text">
                    My first "real" job was a year long intership I did at a company called Sasktel 
                    between my third and fourth year of university.
                    While the money was good it made me realize I disliked corporate cubicle 
                    work environments and have worked in more casual work environments since then.
                </p>
            </div>
            <div className="About-me-non-white-section">
                <p className="About-me-section__text">
                    After completing my internship and final year of university 
                    I got a job working in my local city at a company called Vendasta.             
                    I worked at Vendasta for a year and half and
                    it gave me a great foundation of knowledge that I've continued to use.
                </p>
            </div>
            <div className="About-me-section">
                <p className="About-me-section__text">
                    While I enjoyed working at Vendasta I always kept in mind my dream of living abroad.
                    I worked at Vendasta for a year and a half and decided I had enough industry experience 
                    and money saved up so I began looking for jobs in The Netherlands.
                </p>
            </div>
            <div className="About-me-non-white-section">
                <p className="About-me-section__text">
                    After many job applications and a few interviews I received a job where I would be working
                    in the Netherlands and I've been working here and living here ever since then.
                </p>
            </div>
            <div className="About-me-section">
                <h2>Travelling</h2>
            </div>
            <div className="About-me-non-white-section">
                <p className="About-me-section__text">
                    One of my favorite things to do when possible is travel.
                    Together with my wife we've been able to travel through 22 countries.
                    Canada, the USA, Mexico, the Netherlands, 
                    Belgium, France, Germany, Italy, Greece, Spain, Portugal, 
                    England, Ireland, Scotland, Norway, Sweden, Denmark, 
                    Austria, Hungary, Slovakia, South Korea, and Japan.
                </p>
            </div>
            <div className="About-me-section">
                <h2>Ongoing</h2>
            </div>
            <div className="About-me-non-white-section">
                <p className="About-me-section__text">
                    For now I'm continuing to integrate into Dutch culture and while 
                    I've passed both the inburgerings (integration) exams and staatsexams (state exams)
                    I still feel there is a lot to learn about both the language and culture.
                </p>
            </div>
            <div className="About-me-section">
                <p className="About-me-section__text">
                    For more recent information, check out 
                    <Link to={'/now'}>my now page</Link>
                </p>
            </div>
        </div>
    );
};

export default AboutMe;
