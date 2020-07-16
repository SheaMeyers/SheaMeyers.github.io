import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderBar.css';

const HeaderBar: React.FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div className="Header-bar">
            <div className="Header-bar--link-group">
                { pathname !== '/' &&  <Link className="Link" to={'/'}>Home</Link> }
                { pathname !== '/about-me' && <Link className="Link" to={'/about-me'}>About Me</Link> }
                { pathname !== '/projects' && <Link className="Link" to={'/projects'}>Projects</Link> }
            </div>
            <div className="Header-bar--link-group">
                <a className="Link" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sheameyers/">LinkedIn</a>
                <a className="Link" target="_blank" rel="noopener noreferrer" href="https://github.com/SheaMeyers">Github</a>
            </div>
        </div>
    );
};

export default HeaderBar;
