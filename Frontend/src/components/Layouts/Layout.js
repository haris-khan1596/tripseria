import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "../../App.css";

class Layout extends React.Component {
  render(){
    return (
      <div className="layout-container">
        <Header />
        <main>{this.props.children}</main>
        <Footer />
      </div>
    )
  }
}

export default Layout;