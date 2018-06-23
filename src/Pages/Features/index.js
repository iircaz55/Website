import React from 'react';

import PageWrapper from 'components/PageWrapper';

import './style.css';

class Features extends React.Component {
    features = [
        {
            image: null,
            title: 'Lorem Ipsum',
            subTitle: 'Dolor Sit',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            image: null,
            title: 'Lorem Ipsum',
            subTitle: 'Dolor Sit',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            image: null,
            title: 'Lorem Ipsum',
            subTitle: 'Dolor Sit',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            image: null,
            title: 'Lorem Ipsum',
            subTitle: 'Dolor Sit',
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
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
            <PageWrapper showDownloads header='Features' subHeader={ this.subHeader }>
                <div className='container'>
                    { this.renderFeatures() }
                </div>
            </PageWrapper>
        );
    }
}

export default Features;
