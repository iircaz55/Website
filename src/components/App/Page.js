import React from 'react';

import Header from 'components/App/Header';
import Footer from 'components/App/Footer';


class Page extends React.Component {
  render() {
    return (
      <div className='row'>
        <Header
          header={this.props.header}
          sub_header={this.props.sub_header}
          raw_content={this.props.raw_header_content}/>

        {this.props.children}
        <Footer show_download={this.props.show_footer_downloads}/>
      </div>
    );
  }
}

export default Page;
