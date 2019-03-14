import React, { Component } from "react";
// import logo from "./logo.svg";
import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import Home from "./Home";
import Dashboard from "./views/dashboard";
import LoginOrSignup from "./views/loginOrSignup";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={LoginOrSignup} />
            <Route path="/dashboard" component={Dashboard} />
          </div>
        </BrowserRouter>
        {/* <Dashboard />
        <LoginOrSignup />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Home />
          <Dashboard />
          <LoginOrSignup />
        </header> */}
      </div>
    );
  }
}

export default App;
