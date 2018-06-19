import React from 'react';

import 'components/App/styles/footer.css';

class Header extends React.Component {
  render() {
    return (
      <div className='col-lg-12'>
        <div className='row'>
          <div className='col-lg-12 footer-download-container'>
            <p className='footer-download-header'>
              Download the app
            </p>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 footer-container'>
            <div className='row'>
              <div className='col-sm-4'/>
              <div className='col-sm-4'>
                LOGO
              </div>
              <div className='col-sm-4'/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
