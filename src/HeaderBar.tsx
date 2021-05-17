import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './HeaderBar.css';

const HeaderBar: React.FC = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link className="nav-link" to={'/'}>Home</Link>
                    <Link className="nav-link" to={'/about-me'}>About Me</Link>
                    <Link className="nav-link" to={'/now'}>Now</Link>
                    <Nav.Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sheameyers/">LinkedIn</Nav.Link>
                    <Nav.Link target="_blank" rel="noopener noreferrer" href="https://github.com/SheaMeyers">Github</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderBar;
