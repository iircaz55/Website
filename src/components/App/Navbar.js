import React from 'react';
import { Link } from 'react-router-dom';

import 'components/App/styles/navbar.css';
import Logo from 'components/App/Logo';

class Navbar extends React.Component {
  render() {
    return (
      <div className='row'>
      <nav className="navbar col-lg-12 navbar-expand-lg">
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

        <div className="collapse navbar-collapse row" id="navbarTogglerDemo01">
          <Link className="navbar-nav col-lg-3" to="/"><Logo/></Link>

          <ul className="navbar-nav navbar-nav-center col-lg-6">
            <li className="nav-item">
              <Link className='nav-link' to='/'>Home</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/features'>Features</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/team'>Team</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/tronsr'>TronSR</Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/contact'>Contact</Link>
            </li>
          </ul>

          <ul className="navbar-nav navbar-nav-right col-lg-3">
            <li className="nav-item download">
              <Link className='nav-link' to='/download'>Download</Link>
            </li>
          </ul>
        </div>
      </nav>
      </div>);
  }
}

export default Navbar;
