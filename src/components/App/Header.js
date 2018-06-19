import React from 'react';

import Navbar from 'components/App/Navbar';

import 'components/App/styles/header.css';
import 'components/App/styles/shared.css';

class Header extends React.Component {
    render() {
        return (
          <div className='col-lg-12 fade-background header'>
            <Navbar/>

            <h1 className='header-h1'> { this.props.title } </h1>
            <h2 className='header-h2'> { this.props.children } </h2>
          </div>
        );
    }
}

export default Header;