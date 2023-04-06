import React from 'react';
import { Link } from 'react-router-dom';
import { Nav, Navbar, Button } from 'react-bootstrap';

function NavBar(){
  return (
    <Navbar className='navbar'>
      <Navbar.Brand href="/" className='navbar-logo'>Tripseria</Navbar.Brand>
      
        <Nav className="navbar-items">
          <Nav.Link as={Link} to="/recommended" className='navbar-item'>Recommended Trips</Nav.Link>
          <Nav.Link as={Link} to="/hot" className='navbar-item'>Hot Trips</Nav.Link>
          <Nav.Link as={Link} to="/new" className='navbar-item'>New Trips</Nav.Link>
          <Nav.Link as={Link} to="/favourites" className='navbar-item'>Favourite Trips</Nav.Link>
          <Nav.Link as={Link} to="/mytrips" className='navbar-item'>My Trips</Nav.Link>
        </Nav>
      <Button variant="primary" as={Link} to="/create-trip" className='navbar-create-btn'>Create Your Own Trip</Button>
      
    </Navbar>
  );
};

export default NavBar;