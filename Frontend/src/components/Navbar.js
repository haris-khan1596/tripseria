import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { Nav, Button } from 'react-bootstrap';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import CartModal from './cartitem';


function NavBar({ navbarLogo, links, navbarbtn }) {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const openCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
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
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  {links.map((link, index) => (
                    <Nav.Link key={index} as={Link} to={link.to} className='navbar-item'><span className='navbar-item-text'>{link.text}</span></Nav.Link>
                  ))}
                </Nav>
                <button className='navbar-create-btn btn btn-primary' onClick={openCart}>Open Cart</button>
                <CartModal isOpen={isCartOpen} onClose={closeCart}/>
                {navbarbtn.map((link, index) =>(
                <Button variant="primary" as={Link} to={link.to} className='navbar-create-btn'>{link.text}</Button>))}
              </Navbar.Collapse>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
      
    </div>
  );
};


export default NavBar;