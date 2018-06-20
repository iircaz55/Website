import React from 'react';

import Logo from 'components/Logo';

import './style.css';

class Header extends React.Component {
    render() {
        return (
            <div className='col-lg-12'>
                { this.downloadSection }
                <div className='row'>
                    <div className='col-lg-12 footer-container'>
                        <div className='row'>
                            <div className='col-sm-4 footer-item'></div>
                            <div className='col-sm-4 footer-item'>
                                <Logo/>
                            </div>
                            <div className='col-sm-4'></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    get downloadSection() {
        if(!this.props.showDownloads)
            return null;
            
        return (
            <div className='row'>
                <div className='col-lg-12 footer-download-container'>
                    <p className='footer-download-header'>
                        Download the app
                    </p>
                </div>
            </div>
        );
    }
}

export default Header;
