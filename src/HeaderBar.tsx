import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './HeaderBar.css';

const HeaderBar: React.FC = () => {
    const pathname = useLocation().pathname;

    return (
        <div className="Header-bar">
            <div className="Header-bar--link-group">
                { pathname !== '/' && 
                    <div className="Header-bar--link-div">
                        <Link className="Link" to={'/'}>Home</Link>
                    </div>
                }
                { pathname !== '/about-me' && 
                    <div className="Header-bar--link-div">
                        <Link className="Link" to={'/about-me'}>About Me</Link>
                    </div>
                }
                { pathname !== '/projects' && 
                    <div className="Header-bar--link-div">
                        <Link className="Link" to={'/projects'}>Projects</Link>
                    </div>
                }
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
