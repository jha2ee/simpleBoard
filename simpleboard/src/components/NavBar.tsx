import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas, NavDropdown } from "react-bootstrap";

function NavBar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [expand, setExpand] = useState('lg'); // responsive web

  return (
    <>
      <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
        <Container>
          <Navbar.Brand href="/">SIMPLEBOARD</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
            show={show}
            onHide={handleClose}
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Nav.Link href="home">Home</Nav.Link>
                <Nav.Link href="board">Board</Nav.Link>
                <NavDropdown
                  title="Profile"
                  id={`offcanvasNavbarDropdown-expand-${expand}`}
                >
                  <NavDropdown.Item href="profile/setting">
                    Settings
                  </NavDropdown.Item>
                  <NavDropdown.Item href="profile/qna">Q&A</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="profile/logout">
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
