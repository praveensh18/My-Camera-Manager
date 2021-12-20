import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import Nav from "./components/Nav/Nav";
import Profile from "./components/Profile/Profile";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Nav></Nav>
          <div className="auth-wrapper">
            <Switch>
              <Route exact path="/" component={Home}></Route>

              <Route path="/login" component={Login}></Route>

              <Route path="/profile" component={Profile}></Route>
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
