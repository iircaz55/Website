import React from 'react';

import 'components/App/styles/header.css';
import 'components/App/styles/shared.css';

class Header extends React.Component {
    render() {
        return (
          <div className='col-lg-12 fade-background header'>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            </nav>

            <h1 className='header-h1'> { this.props.title } </h1>
            <h2 className='header-h2'>{this.props.children}</h2>
          </div>
        );
    }
}

export default Header;