import React from 'react';

import PageWrapper from 'components/PageWrapper';

import './style.css';

class Home extends React.Component {
    render() {
        return (
            <PageWrapper rawHeaderContent={ this.headerContent }>
                <div className='row'>
                    <div className='col-lg-12 home-middle'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-12'>
                                    <p className='key-features-h'>Our Key Features</p>
                                </div>
                            </div>                            
                            <div className='row'>
                                <div className='col-lg-4 key-feature feature-built'>
                                    <p className='key-feature-title'>BUILT FOR TRON</p>
                                    <p className='key-feature-desc'>
                                        We designed and built this Wallet from the ground up for the Tron programming competition.<br/>
                                        No compromises.
                                    </p>
                                </div>
                                <div className='col-lg-4 key-feature feature-trust'>
                                    <p className='key-feature-title'>TRUSTLESS</p>
                                    <p className='key-feature-desc'>
                                        Your private keys never leave your device.<br/>
                                        You are in control of your money.
                                    </p>
                                </div>
                                <div className='col-lg-4 key-feature feature-os'>
                                    <p className='key-feature-title'>OPEN SOURCE</p>
                                    <p className='key-feature-desc'>
                                        Our code is open source,<br/>
                                        anybody can verify and build on it.
                                    </p>
                                </div>
                            </div>
                            <div className='row'>                                
                                <div className='col-lg-8'>
                                    <p className='home-trust-h'>Stop trusting others with your money.</p>
                                    <p className='home-trust-desc'>
                                        Using TronWatch you can send and receive money directly, or use it in offline mode as cold storage.<br/>
                                        Sign transactions offline and broadcast them from different devices.
                                    </p>
                                </div>
                                <div className='col-lg-4'></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-12 home-red fade-background'>
                        <div className='container'>
                            <div className='row'>
                                <div className='col-lg-6'>
                                    <p className='home-red-h'>Hot Wallet</p>
                                    <p className='home-red-desc'>
                                        Send and receive Tron instantly<br/>
                                        Manage all your Tron accounts and tokens.<br/>
                                        Transactions are signed on your device and broadcasted to the network.
                                    </p>
                                </div>
                                <div className='col-lg-6'>
                                    <p className='home-red-h'>Cold Wallet</p>
                                    <p className='home-red-desc'>
                                        Sign Transactions without an active internet connection.<br/>
                                        Broadcast them using a different device for best possible security.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        );
    }

    get headerContent(){
        return (
            <div className='container intro'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <h1 className='home-h home-h1'>TronWatch</h1>
                        <h2 className='home-h home-h2'>The wallet built for Tron</h2>
                        <h3 className='home-h home-h3'>
                            Manage your Tron finances in one App!<br/>
                            Store and spend them with our open source wallet.<br/>
                            Coming to iOS, Android, macOS, Windows and Linux.
                        </h3>
                    </div>
                    <div className='col-lg-6 home-phones'></div>
                </div>
            </div>
        );
    }
}

export default Home;
