import React from 'react';
import { useLocation } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import './HeaderBar.css';

const HeaderBar: React.FC = () => {
    const pathname = useLocation().pathname;

    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                { pathname !== '/' &&  <Nav.Link href="/">Home</Nav.Link> }
                { pathname !== '/about-me' && <Nav.Link href="/about-me">About Me</Nav.Link> }
                { pathname !== '/projects' && <Nav.Link href="/projects">Projects</Nav.Link> }
                <Nav.Link target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/sheameyers/">LinkedIn</Nav.Link>
                <Nav.Link target="_blank" rel="noopener noreferrer" href="https://github.com/SheaMeyers">Github</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderBar;
