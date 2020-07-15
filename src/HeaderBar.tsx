import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderBar.css';

const HeaderBar: React.FC = () => {
    return (
        <div className="Header-bar">
            <div className="Header-bar--link-group">
                <div className="Header-bar--link-div">
                    <Link className="Link" to={'/about-me'}>About Me</Link>
                </div>
                <div className="Header-bar--link-div">
                    <Link className="Link" to={'/projects'}>Projects</Link>
            </div>
            </div>
            <div className="Header-bar--link-group">
                <div className="Header-bar--link-div">
                    <a className="Link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sheameyers/">LinkedIn</a>
                </div>
                <div className="Header-bar--link-div">
                    <a className="Link" target="_blank" rel="noopener noreferrer" href="https://github.com/SheaMeyers">Github</a>
                </div>
            </div>
        </div>
    );
};

export default HeaderBar;
