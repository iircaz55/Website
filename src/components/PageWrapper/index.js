import React from 'react';

import Header from 'components/Header';
import Footer from 'components/Footer';

class Page extends React.Component {
    render() {
        const {
            header,
            subHeader,
            rawHeaderContent,
            showDownloads
        } = this.props;

        return (
            <React.Fragment>
                <Header
                    header={ header }
                    subHeader={ subHeader }
                    rawContent={ rawHeaderContent } 
                />
                <div className='page-wrapper'>
                    { this.props.children }
                </div>
                <Footer showDownloads={ showDownloads } />
            </React.Fragment>
        );
    }
}

export default Page;
