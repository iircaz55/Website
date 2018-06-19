import React from 'react';

import Page from 'components/App/Page';
import 'components/App/styles/home.css';

class Home extends React.Component {
  render() {
    return (
      <Page raw_header_content={Home.getHeaderContent()}>
        <div className='col-lg-12 home-middle'>
          <p className='key-features-h'>Our Key Features</p>
          <div className='row'>
            <div className='col-lg-4'>
              <p className='key-feature-title'>BUILT FOR TRON</p>
            </div>
            <div className='col-lg-4'>
              <p className='key-feature-title'>BUILT FOR TRON</p>
            </div>
            <div className='col-lg-4'>
              <p className='key-feature-title'>BUILT FOR TRON</p>
            </div>
          </div>
        </div>
      </Page>
    );
  }


  static getHeaderContent(){
    return (
      <div className='row'>
        <div className='col-lg-1'/>
        <div className='col-lg-6'>
          <h1 className='home-h home-h1'>TronWatch</h1>
          <h2 className='home-h home-h2'>The wallet built for Tron</h2>
          <h3 className='home-h home-h3'>
            Manage your Tron finances in one App!<br/>
            Store and spend them with our open source wallet.<br/>
            Coming to iOS, Android, macOS, Windows and Linux.
          </h3>
        </div>
        <div className='col-lg-4 home-phones'/>
        <div className='col-lg-1'/>
      </div>
    );
  }
}

export default Home;
