import React from 'react';

import Logo from 'components/Logo';

import './style.css';

class Header extends React.Component {
    render() {
        return (
            <div className='col-lg-12'>
                { this.downloadSection }
                <div className='footer-container row'>
                    <div className='col-sm-4 footer-item footer-links'>
                        <a href="#">Footer Link</a>
                        <a href="#">Footer Link</a>
                        <a href="#">Footer Link</a>
                        <a href="#">Footer Link</a>
                    </div>
                    <div className='col-sm-4 footer-item'>
                        <a href="#"><Logo/></a>
                    </div>
                    <div className='col-sm-4 footer-item'>
                        <div className="footer-copyright">© TronWatch 2018</div>
                        <div className="footer-socials">
                            <a href="#">
                                <svg viewBox="0 0 24 24">
                                    <path fill="#fff" d="M22,11.5C22,10.1 20.9,9 19.5,9C18.9,9 18.3,9.2 17.9,9.6C16.4,8.7 14.6,8.1 12.5,8L13.6,4L17,5A2,2 0 0,0 19,7A2,2 0 0,0 21,5A2,2 0 0,0 19,3C18.3,3 17.6,3.4 17.3,4L13.3,3C13,2.9 12.8,3.1 12.7,3.4L11.5,8C9.5,8.1 7.6,8.7 6.1,9.6C5.7,9.2 5.1,9 4.5,9C3.1,9 2,10.1 2,11.5C2,12.4 2.4,13.1 3.1,13.6L3,14.5C3,18.1 7,21 12,21C17,21 21,18.1 21,14.5L20.9,13.6C21.6,13.1 22,12.4 22,11.5M9,11.8C9.7,11.8 10.2,12.4 10.2,13C10.2,13.6 9.7,14.2 9,14.2C8.3,14.2 7.8,13.7 7.8,13C7.8,12.3 8.3,11.8 9,11.8M15.8,17.2C14,18.3 10,18.3 8.2,17.2C8,17 7.9,16.7 8.1,16.5C8.3,16.3 8.6,16.2 8.8,16.4C10,17.3 14,17.3 15.2,16.4C15.4,16.2 15.7,16.3 15.9,16.5C16.1,16.7 16,17 15.8,17.2M15,14.2C14.3,14.2 13.8,13.6 13.8,13C13.8,12.3 14.4,11.8 15,11.8C15.7,11.8 16.2,12.4 16.2,13C16.2,13.7 15.7,14.2 15,14.2Z" />
                                </svg>
                            </a>
                            <a href="#">
                                <svg viewBox="0 0 24 24">
                                    <path fill="#fff" d="M10,15L15.19,12L10,9V15M21.56,7.17C21.69,7.64 21.78,8.27 21.84,9.07C21.91,9.87 21.94,10.56 21.94,11.16L22,12C22,14.19 21.84,15.8 21.56,16.83C21.31,17.73 20.73,18.31 19.83,18.56C19.36,18.69 18.5,18.78 17.18,18.84C15.88,18.91 14.69,18.94 13.59,18.94L12,19C7.81,19 5.2,18.84 4.17,18.56C3.27,18.31 2.69,17.73 2.44,16.83C2.31,16.36 2.22,15.73 2.16,14.93C2.09,14.13 2.06,13.44 2.06,12.84L2,12C2,9.81 2.16,8.2 2.44,7.17C2.69,6.27 3.27,5.69 4.17,5.44C4.64,5.31 5.5,5.22 6.82,5.16C8.12,5.09 9.31,5.06 10.41,5.06L12,5C16.19,5 18.8,5.16 19.83,5.44C20.73,5.69 21.31,6.27 21.56,7.17Z" />
                                </svg>
                            </a>
                            <a href="#">
                                <svg viewBox="0 0 24 24">
                                    <path fill="#fff" d="M21,21H17V14.25C17,13.19 15.81,12.31 14.75,12.31C13.69,12.31 13,13.19 13,14.25V21H9V9H13V11C13.66,9.93 15.36,9.24 16.5,9.24C19,9.24 21,11.28 21,13.75V21M7,21H3V9H7V21M5,3A2,2 0 0,1 7,5A2,2 0 0,1 5,7A2,2 0 0,1 3,5A2,2 0 0,1 5,3Z" />
                                </svg>
                            </a>
                            <a href="#">
                                <svg viewBox="0 0 24 24">
                                    <path fill="#fff" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />
                                </svg>
                            </a>
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
