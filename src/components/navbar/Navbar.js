import React, { Component } from "react";
import { Link } from "react-router-dom";
import {} from "./navbar.module.css";

class Navbar extends Component {

  render() {
    return (
      <nav>
        <div>
          <Link to="/">BookStore</Link>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/cart">Cart</Link>
        </div>
      </nav>
    );
  }
}

export default Navbar;
