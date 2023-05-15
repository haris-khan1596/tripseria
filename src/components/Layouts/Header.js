import NavBar from "../Navbar";
import React from "react";

class Header extends React.Component {
  render() {
          
    const links = [
      {to: '/',text:'About'},
      { to: '/recommended', text: 'Recommended Trips' },
      { to: '/hot', text: 'Hot Trips' },
      { to: '/new', text: 'New Trips' },
      { to: '/favourites', text: 'Favourite Trips' },
      { to: '/mytrips', text: 'My Trips' }
    ];
    
    const navbarItems = [
      { to: '/link1', text: 'Navbar Item 1' },
      { to: '/link2', text: 'Navbar Item 2' }
    ];
    return (
      
    <header>
<NavBar navbarLogo="tripserio" links={links} navbarbtn={navbarItems} />

      </header>);
}}
export default Header;