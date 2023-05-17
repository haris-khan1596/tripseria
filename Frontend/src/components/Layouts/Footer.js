import React from "react";

class Footer extends React.Component {
  render() {
    return (
      <footer className=" text-light py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h4>tripseria</h4>
              <p>Your description goes here</p>
            </div>
            <div className="col-md-3">
              <h5>Company</h5>
              <ul>
                <li>About us</li>
                <li>Destinations</li>
                <li>Packages</li>
                <li>Contact</li>
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Help</h5>
              <ul>
                <li>Contact</li>
                
              </ul>
            </div>
            <div className="col-md-3">
              <h5>Terms</h5>
              <ul>
                <li>Privacy Policy</li>
                <li>Terms of use</li>
                <li>Accessibilty</li>
                
              </ul>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-md-12 text-center">
              <div className="icon-foot"><a href="https://www.facebook.com">
                <i className="fab fa-facebook-f"></i>
              </a></div>
              <div className="icon-foot"><a href="https://www.instagram.com">
                <i className="fab fa-instagram"></i>
              </a></div>
              <div className="icon-foot"><a href="https://www.twitter.com">
                <i className="fab fa-twitter"></i>
              </a></div>
            </div>
          </div>
          <hr/>
          <div className="row mt-3">
            <div className="col-md-12 text-center">
              <p>&copy; 2023 Tripseria. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;