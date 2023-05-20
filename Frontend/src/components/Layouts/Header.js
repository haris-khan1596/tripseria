import NavBar from "../Navbar";
import React from "react";

class Header extends React.Component {
  render() {
          
    const links = [
      {to: '/',text:'Home'},
      { to: '/trips', text: 'Trips' },
    ];
    
    const navbarItems = [
      { to: '/link1', text: 'Signup' },
      { to: '/link2', text: 'Login' },
    ];
    return (
      
    <header>
<NavBar navbarLogo="tripserio" links={links} navbarbtn={navbarItems} />

      </header>);
}}
export default Header;