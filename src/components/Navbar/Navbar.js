import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";

import "../../assets/css/navBar.css"
import Logo from "../../assets/images/avvic-logo-1.png"

import React from "react";

function NavBar() {
  return (
    <div>
      {" "}
      <Navbar  expand="lg" fixed="top" className="navbar-container">
        <Container>
        <Navbar.Brand href="#home">
            <img
              src={Logo}
              width="120"
              height="60"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/" className="nav-menu">
                Home
              </Nav.Link>
              <NavDropdown
                title="Business"
                id="collasible-nav-dropdown"
                className="nav-menu "
                renderMenuOnMount={true}
              >
                <NavDropdown.Item href="/" className="nav-link">
                  Discover Business
                </NavDropdown.Item>
                <NavDropdown.Item href="/" className="nav-link">
                  Business registeration
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Company"
                id="basic-nav-dropdown"
                className="nav-menu"
                renderMenuOnMountount={true}
              >
                <NavDropdown.Item href="/" className="nav-link">
                  Blog
                </NavDropdown.Item>
                <NavDropdown.Item href="/" className="nav-link">
                  Press
                </NavDropdown.Item>
                <NavDropdown.Item href="/" className="nav-link">
                  Join our Team
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">About us</NavDropdown.Item>
              </NavDropdown>{" "}
              <NavDropdown
                title="Help"
                id="basic-nav-dropdown"
                className="nav-menu"
                renderMenuOnMount={true}
              >
                <NavDropdown.Item href="/">Get help</NavDropdown.Item>
                <NavDropdown.Item href="/">Scam Awareness</NavDropdown.Item>
                <NavDropdown.Item href="/">FAQS</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/">Security</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/" className="nav-menu">
                Developers
              </Nav.Link>
            </Nav>
            <Nav className="justify-content-end" activeKey="/home">
              <Nav.Item>
                <Nav.Link href="/">
                  <Button variant="outline-secondary" className="nav-button-1">
                    Sign In
                  </Button>{" "}
                </Nav.Link>
              </Nav.Item>
              <Nav.Item>
                {" "}
                <Nav.Link href="/">
                  {" "}
                  <Button variant="primary" className="nav-button-2">
                    Join Avvic
                  </Button>{" "}
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
