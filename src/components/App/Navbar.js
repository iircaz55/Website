import React from 'react';

import 'components/App/styles/navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <nav className="row navbar navbar-expand-lg">
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarTogglerDemo01"
          aria-controls="navbarTogglerDemo01"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"/>
        </button>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <a className="navbar-brand col-lg-3" href="#">Hidden brand</a>

          <ul className="navbar-nav navbar-nav-center col-lg-6">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Timeline</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Team</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Contact</a>
            </li>

          </ul>

          <ul className="navbar-nav navbar-nav-right col-lg-3">
            <li className="nav-item download">
              <a className="nav-link" href="#">Download</a>
            </li>
          </ul>
        </div>
      </nav> );
  }
}

export default Navbar;
