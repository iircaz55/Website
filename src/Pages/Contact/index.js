import React from 'react';

import PageWrapper from 'components/PageWrapper';

import './style.css';

class Contact extends React.Component {
    socialLinks = [
        {
            icon: 'linkedin',
            link: 'http://google.co.uk'
        },
        {
            icon: 'facebook',
            link: 'http://google.co.uk'
        },
        {
            icon: 'twitter',
            link: 'http://google.co.uk'
        },
        {
            icon: 'youtube',
            link: 'http://google.co.uk'
        },
        {
            icon: 'reddit',
            link: 'http://google.co.uk'
        },
    ]

    get subHeader() {
        return (
            <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do<br/>
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut<br/>
                enim ad minim veniam, quis nostrud exercitation ullamco<br/>
                laboris nisi ut aliquip ex ea commodo consequat.
            </span>
        );
    }

    renderSocialLinks() {
        return this.socialLinks.map(({ icon, link }, index) => {
            return (
                <a className='social-link' key={ index } href={ link } target='_blank'>
                    <i className={ 'fa fa-' + icon } />
                </a>
            )
        });
    }

    renderForm() {
        return (
            <React.Fragment>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='form-container col-md-6'>
                        <input type='text' placeholder='Your Name' />
                        <input type='text' placeholder='Your Email' />
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-3'></div>
                    <div className='form-container col-md-6'>
                        <textarea placeholder='Your Message' rows={ 5 } />
                    </div>
                </div>
                <div className='row button-row'>
                    <div className='form-button'>
                        Submit
                    </div>
                </div>
            </React.Fragment>
        )
    }

    render() {
        return (
            <PageWrapper showDownloads header='Contact' subHeader={ this.subHeader }>
                <div className='container'>
                    <div className='row'>
                        <div className='col social-links'>
                            { this.renderSocialLinks() }
                        </div>
                    </div>
                    { this.renderForm() }
                </div>
            </PageWrapper>
        );
    }
}

export default Contact;
