import React, { Component } from "react";
import NavBar from "./components/NavBar";
import Job from "./components/Job";
export default class App extends Component {
  render() {
    return (
      <div className="">
        <NavBar />
        <div className="container">
          <Job />
        </div>
      </div>
    );
  }
}
