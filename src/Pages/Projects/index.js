import React from 'react';

import PageWrapper from 'components/PageWrapper';

import './style.css';

class Projects extends React.Component {
    features = [
        {
            image: '../images/TronWatch_Desktop.png',
            title: 'TronWatch',
            subTitle: 'Desktop Wallet',
            content: 'TronWatch is a fully OpenSource Wallet for TRON. It covers all the important features the protocol has to offer.'
        },
        {
            image: '../images/TronLink.png',
            title: 'TronLink',
            subTitle: 'Browser Extension',
            content: 'TronLink provides similar usage to the Tron Network as MetaMask does with the Ethereum Network. Developers will now be able to create and interact with DApps in the browser which opens up a whole new realm that Tron has never seen before.'
        },
        {
            image: '../images/TronLink.png',
            title: 'TronWatch',
            subTitle: 'Mobile Wallet',
            content: ' fast and reliable wallet that you can use as both Cold and Hot Storage to sign any transaction needed on the Tron Protocol without compromising the user experience.'
        },
        {
            image: '../images/TronWatch_DEX.png',
            title: 'Decentralized Exchange',
            subTitle: 'Dolor Sit',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ]

    get subHeader() {
        return (
            <span>
                At TronWatch, our focus is on projects that will <br/>
                help shape the community into a better place.<br/>
                We plan to do this by building utilities to push the Tron Network forward <br/>
                as a whole, which will help influence innovation within the network.
            </span>
        );
    }

    renderFeatures() {
        return this.features.map(({ image = null, title, subTitle, content }, index) => {
            const className = (index % 2 === 1 ? 'flex-row-reverse ' : '') + 'row feature';
            const imageElement = <img src={ image === null ? 'https://placeimg.com/640/480/any' : image } className='feature-image' alt={ title } />;

            return (
                <div className={ className } key={ index }>
                    <div className='col feature-image-container'>
                        { imageElement }
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col feature-desc'>
                        <h1>{ title }</h1>
                        <h2>{ subTitle }</h2>
                        <p>{ content }</p>
                    </div>
                </div>
            )
        });
    }

    render() {
        return (
            <PageWrapper showDownloads header='Projects' subHeader={ this.subHeader }>
                <div className='container'>
                    { this.renderFeatures() }
                </div>
            </PageWrapper>
        );
    }
}

export default Projects;
