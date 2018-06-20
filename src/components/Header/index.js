import React from 'react';

import Navbar from 'components/Navbar';

import './style.css';

class Header extends React.Component {
    render() {
        return (
            <div className='col-lg-12 fade-background header'>
                <Navbar />
                { this.header }
                { this.subHeader }
                { this.rawContent }
            </div>
        );
    }

    get header() {
        if(!this.props.header)
            return null;

        return (
            <div className='row'>
                <div className='col-lg-12'>
                    <h1 className='header-h1'>
                        { this.props.header } 
                    </h1>
                </div>
            </div>
        );
    }

    get subHeader() {
        if(!this.props.subHeader)
            return null;

        return (
            <div className='row'>
                <div className='col-lg-12'>
                    <h1 className='header-h2'>
                        { this.props.subHeader } 
                    </h1>
                </div>
            </div>
        );
    }

    get rawContent() {
        return this.props.rawContent || null;
    }
}

export default Header;