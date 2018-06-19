import React from 'react';

import Navbar from 'components/App/Navbar';

import 'components/App/styles/header.css';
import 'components/App/styles/shared.css';

class Header extends React.Component {
    render() {
        return (
          <div className='col-lg-12 fade-background header' style={this.props.style}>

            <Navbar/>
            {this.getHeader()}
            {this.getSubHeader()}
            {this.props.raw_content}

          </div>
        );
    }

    getHeader(){
        if(this.props.header){
            return (
              <h1 className='header-h1'> { this.props.header} </h1>
            );
        }
        return null;
    }

    getSubHeader(){
      if(this.props.sub_header){
        return (
          <h2 className='header-h2'> { this.props.sub_header} </h2>
        );
      }
      return null;
    }

}

export default Header;