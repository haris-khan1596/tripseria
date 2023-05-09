import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavBar(){
  return (
    <div style={{
      paddingBottom: "85px"
      }}>
        
    <Navbar key="lg" expand="lg" className="mb-3 fixed-top">
    <Container fluid>
     <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
      <Navbar.Brand href="/" className='navbar-logo'><h2 className='justify-content-left'>Tripserio</h2></Navbar.Brand>
       <Navbar.Offcanvas
id={`offcanvasNavbar-expand-lg`}
aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
placement="end"
>
     <Offcanvas.Header closeButton>
 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
Offcanvas
</Offcanvas.Title>
</Offcanvas.Header>
<Offcanvas.Body>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="justify-content-end flex-grow-1 pe-3">

          <Nav.Link as={Link} to="/recommended" className='navbar-item'>Recommended Trips</Nav.Link>
          <Nav.Link as={Link} to="/hot" className='navbar-item'>Hot Trips</Nav.Link>
          <Nav.Link as={Link} to="/new" className='navbar-item'>New Trips</Nav.Link>
          <Nav.Link as={Link} to="/favourites" className='navbar-item'>Favourite Trips</Nav.Link>
          <Nav.Link as={Link} to="/mytrips" className='navbar-item'>My Trips</Nav.Link>
          <span></span>
          </Nav>
          
      <Button variant="primary" as={Link} to="/create-trip" className='navbar-create-btn'>Create Your Own Trip</Button>
      </Navbar.Collapse>
      </Offcanvas.Body></Navbar.Offcanvas></Container>
    </Navbar></div>
  );
};

export default NavBar;

