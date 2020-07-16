import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
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
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default HeaderBar;
