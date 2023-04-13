import React, { Component } from "react";

export class NavBar extends Component {
  render() {
    return (
      <div className="">
        <nav className="navbar bg-body-tertiary">
          <div className="container-fluid">
            <a href="/" className="navbar-brand">
              Job Board
            </a>
            <button className="btn btn-outline-success" type="submit">
              Login/Register
            </button>
          </div>
        </nav>
      </div>
    );
  }
}

export default NavBar;
