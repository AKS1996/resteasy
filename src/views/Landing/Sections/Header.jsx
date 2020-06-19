

import React from "react"
import "./Header.css"
import {Col, Nav, Navbar, Container, NavDropdown, Form, FormControl, Button} from "react-bootstrap"
import { withRouter } from "react-router-dom";


function Header({ location }){
    const { pathname } = location;

    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="/">
                    <img
                        src={require('../../../assets/img/logo192.png')}
                        width="50"
                        height="50"
                        className="d-inline-block align-top"
                        alt="RestEasy logo"
                    />
                </Navbar.Brand>
                <span onClick={e => window.location.href = '/'} className="title">RestEasy</span>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className="menu-options">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">About</Nav.Link>
                        <Nav.Link href="#faq">FAQ</Nav.Link>
                        <Nav.Link href="#whatToDo">What to do Now?</Nav.Link>
                        <Nav.Link href="#help">Help a friend in need</Nav.Link>
                        <Nav.Link href="#registry">Registry</Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-success">Login</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default withRouter(Header)
