import React from 'react';
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const appNavbar = () => {

    return (

      <Navbar className="navbar" expand="lg">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbar" />
          <Navbar.Collapse>
            <Nav className="ml-auto">
             <Nav.Link as={Link} to="/">
               ABOUT
               </Nav.Link>
               <Nav.Link as={Link} to="/portfolio">
                 PORTFOLIO
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                CONTACT
              </Nav.Link>
             
       </Nav>
       </Navbar.Collapse>
       </Container>
     </Navbar>
   );
 }    

export default appNavbar;