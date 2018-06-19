import React from 'react';

import Header from 'components/App/Header';
import Footer from 'components/App/Footer';


class Page extends React.Component {
  render() {
    return (
      <div className='row'>
        <Header title={this.props.header_title}>
          {this.props.header_desc}
        </Header>

        {this.props.children}

        <Footer/>
      </div>
    );
  }
}

export default Page;
