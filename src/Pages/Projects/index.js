import React from 'react';

import PageWrapper from 'components/PageWrapper';

import './style.css';

class Projects extends React.Component {
    features = [
        {
            image: '../images/TronWatch_Desktop.png',
            title: 'TronWatch',
            link: 'https://github.com/TronWatch/Desktop-Wallet',
            subTitle: 'Desktop Wallet',
            content: 'TronWatch is a fully OpenSource Wallet for TRON. \nIt covers all the important features the protocol has to offer.\nYou can send, receive, vote, and buy tokens with this wallet.\nSupports Windows and Mac OS.'
        },
        {
            image: '../images/TronLink.png',
            title: 'TronLink',
            link: 'https://github.com/TronWatch/TronLink',
            subTitle: 'Browser Extension',
            content: 'TronLink provides similar usage to the Tron Network as MetaMask does with the Ethereum Network. \nDevelopers are able to create and interact with dApps in the browser, which opens up a whole new realm that Tron has never seen before.'
        },
        {
            image: '../images/TronWatchMobile.png',
            title: 'TronWatch',
            link: 'https://github.com/TronWatch/Mobile-Wallet',
            subTitle: 'Mobile Wallet',
            content: 'A fast and reliable wallet that you can use as both Cold and Hot Storage to sign any transaction needed on the Tron Protocol without compromising the user experience.\nSupports iOS and Android.'
        },
        {
            image: '../images/TronWatch_DEX.png',
            title: 'TronWatch DEX',
            subTitle: 'Decentralized Exchange',
            content: 'The TronWatch DEX will enable users to exchange TRX with other tokens found on the Tron Blockchain.\nRelease to be announced.'
        }
    ]

    get subHeader() {
        return (
            <span className="projectSpan">
                At TronWatch, our focus is on projects that <br/>
                will help shape the community into a better place.<br/>
                We plan to do this by building utilities to push the Tron Network forward <br/>
                as a whole, which will help influence innovation within the network.
            </span>
        );
    }

    renderFeatures() {
        return this.features.map(({ image = null, title, link, subTitle, content }, index) => {
            const className = (index % 2 === 1 ? 'flex-row-reverse ' : '') + 'row feature';
            const imageElement = <img src={ image === null ? 'https://placeimg.com/640/480/any' : image } className='feature-image' alt={ title } />;
            const linkTitle = link === null ? <h1>{ title }</h1> : <h1><a href={ link }>{ title }</a></h1>;
            return (
                <div className={ className } key={ index }>
                    <div className='col feature-image-container'>
                        { imageElement }
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col feature-desc'>
                        { linkTitle }
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
