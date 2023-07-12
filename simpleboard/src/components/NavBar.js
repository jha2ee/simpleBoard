import React, { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import {  Nav, Navbar, Container, Offcanvas, NavDropdown  } from "react-bootstrap";
function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [expand, setExpand] = useState('lg'); //responsive web

  return (
    <>
    
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container>
          
            <Navbar.Brand href="#">SIMPLEBOARD</Navbar.Brand>
            <Navbar.Toggle  />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Menu
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">Board</Nav.Link>
                  <NavDropdown
                    title="Setting"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                  >
                    <NavDropdown.Item href="#action3">Profile</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Q&A
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5">
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
                
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      
      
    </>
  );
}

export default NavBar;
