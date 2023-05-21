import React from "react";
import NavBar from "../Navbar";
import { isloggedIn} from '../../helper';

class Header extends React.Component {
  render() {
    const links = [
      { to: '/', text: 'Home' },
      { to: '/trips', text: 'Trips' },
      { to: '/', text: '' },
    ];

    let navbarItems = [];

    if (!isloggedIn()) {
      navbarItems = [
        { to: '/signup', text: 'Signup' },
        { to: '/login', text: 'Login' },
      ];
    }

    return (
      <header>
        <NavBar
            navbarLogo="tripserio"
            links={links}
            navbarbtn={navbarItems}
          />
      </header>
    );
  }
}

export default Header;
