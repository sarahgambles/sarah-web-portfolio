import React from 'react';
import { Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';

function Nav() {
    return (

      <Navbar bg="light" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">

            <Nav.Link classNam="navbar-brand" to="/">
            </Nav.Link>

            <div class="collapse navbar-collapse justify-content-end">
              <ul className="navbar-nav">
                <li className="nav-item active">
                  <Nav.Link
                  to="/"
                  className={
                    window.location.pathname === "/" || window.location.pathname === "/about" 
                    ? "nav-link navbar-brand active"
                    : "nav-link"
                  }
                  >
                    ABOUT
                  </Nav.Link>
                </li>
                <li className="nav-item active">
                  <Nav.Link
                  to="/contact"
                  className= {
                    window.location.pathname === "/contact" 
                    ? "nav-link navbar-brand active"
                    : "nav-link"
                  }
                  >
                    CONTACT
                  </Nav.Link>
                </li>
                <li className="nav-item active">
                  <Nav.Link 
                  to="/portfolio"
                  className={window.location.pathname === "/portfolio" ? "nav-link navbar-brand active" : "nav-link"}
              >
                PORTFOLIO
              </Nav.Link>
                </li>
                <li className="nav-item active">
              <Link
                to="/resume"
                className={window.location.pathname === "/resume" ? "nav-link navbar-brand active" : "nav-link"}
              >
                RESUME
              </Link>
            </li>
              </ul>
            </div>
            </Nav>
        </Navbar.Collapse>
        </Navbar>

    );
}

export default Nav;