import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import CartModal from './cartitem';
import { isloggedIn, isUser, isplanner } from '../helper';


function NavBar({ navbarLogo, links, navbarbtn }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  const logout=()=> {
    window.open(`${window.location.origin}`,`_self`);
    localStorage.removeItem('user');
    localStorage.removeItem('isloggedIn');
    localStorage.removeItem('isplanner');
      };

  const renderNavbarButtons = () => {
    if (isUser()) {
      return (
          <>
          <button className='navbar-create-btn btn btn-primary' onClick={openCart}>Open Cart</button>
          <CartModal withFunctionality={true} isOpen={isCartOpen} onClose={closeCart} />
          <button className='navbar-create-btn btn btn-primary' onClick={logout}>Logout</button></>
      );
    } else if (isplanner()) {
      return (
        <>
        <Button variant="primary" as={Link} to="/planner/create/trip" className='navbar-create-btn'>Create New Trip</Button>
        <button className='navbar-create-btn btn btn-primary' onClick={logout}>Logout</button></>
      );
    } else {
      return null;
    }
  };

  return (
    <div>
      <Navbar key="lg" expand="lg" className="mb-3 fixed-top">
        <Container fluid>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
          <Navbar.Brand href="/"><h2 className='justify-content-left navbar-logo'>{navbarLogo}</h2></Navbar.Brand>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-lg`}
            aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}></Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {links.map((link, index) => (
                    <Nav.Link key={index} as={Link} to={link.to} className='navbar-item'><span className='navbar-item-text'>{link.text}</span></Nav.Link>
                  ))}
                  {isloggedIn()?<Nav.Link as={Link} to={isplanner()?'planner/profile':'user/profile'} className='navbar-item'><span className='navbar-item-text'>Profile</span></Nav.Link>:<span></span>}
                </Nav>
                {renderNavbarButtons()}
                {navbarbtn.map((link, index) => (
                  <Button variant="primary" as={Link} to={link.to} className='navbar-create-btn' key={index}>{link.text}</Button>
                ))}
              </Navbar.Collapse>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
