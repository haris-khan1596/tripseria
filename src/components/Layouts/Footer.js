import React from "react";

class Footer extends React.Component {
  render() {
    return( <footer className='bg-dark text-light py-3'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-6'>
          <p>&copy; 2023 Tripseria. All Rights Reserved.</p>
        </div>
        <div className='col-md-6 text-end'>
          <p>Contact Us: <a href="support@tripseria.com">support@tripseria.com</a></p>
        </div>
      </div>
    </div>
  </footer>
    );
  }
}

export default Footer;