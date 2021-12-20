import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { signIn, signOut } from "../../actions";
import "./Nav.css";

class Nav extends Component {
  onAuthChange = () => {
    this.props.signOut(this.props.signInDetails.access_token);
  };

  // actionButtons either login or logout
  render() {
    let actionButtons;
    if (this.props.isSignedIn) {
      actionButtons = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/profile"} className="nav-link">
              Dashboard
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/"} onClick={this.onAuthChange} className="nav-link">
              Logout
            </Link>
          </li>
        </ul>
      );
    } else {
      actionButtons = (
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link to={"/login"} className="nav-link">
              Login
            </Link>
          </li>
        </ul>
      );
    }
    return (
      <div className="navbar">
        <div className="container">
          <div className="logo">
            <h1>Logo</h1>
          </div>
          <nav>
            <Link to={"/"} className="nav-link">
              Home
            </Link>

            <Link to={"/"} className="nav-link">
              Contact us
            </Link>
            <div className="">{actionButtons}</div>
          </nav>
        </div>
      </div>
    );
  }
}

// Function to provide all required state details to class props
const mapStateToProps = state => {
  return {
    signInDetails: state.auth.userData,
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { signIn, signOut })(Nav);
