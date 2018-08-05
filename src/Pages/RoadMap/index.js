import React from 'react';

import PageWrapper from 'components/PageWrapper';

import './style.css';

class RoadMap extends React.Component {
    timeline = [
        {
            title: 'Tron Programming Contest',
            date: 'April 2018',
            content: [
                'First place, Windows Wallet',
            ]
        },
        {
            title: 'TronLink',
            date: '31 July 2018',
            content: [
                'Beta Release',
            ]
        },
        {
            title: 'TronLink',
            date: 'End of Q3 2018',
            content: [
                'Release for Tron Mainnet',
                'Web3 compatible api'
            ]
        },
        {
            title: 'TronWatch Desktop',
            date: 'Q4 2018',
            content: [
                'Ledger Support',
                'Multi-Language Support',
            ]
        },
        {
            title: 'Decentralized Exchange Market',
            date: 'Q4 - 2018',
        },
        {
            title: 'TronWatch Mobile',
            date: '2019',
            content: [
                'Release of the Mobile Wallet'
            ]
        }
    ];

    get subHeader() {
        return (
            <span>
                With a focus on writing DApps and solutions for Tron, <br/>
                we aim to organically improve the usability and general health of the Tron Community.<br/>
            </span>
        );
    }

    renderTimeline(side) {
        const remainder = side === 'right' ? 0 : 1;

        return this.timeline.map((goal, index) => {
            const className = index % 2 === remainder ? 'flex-row-reverse' : '';
            const content = (goal.content || []).map((item, index) => {
                return (
                    <li key={ index }>
                        <span>
                            { item }
                        </span>
                    </li>
                );
            });

            return (
                <div className={ 'row timeline-row ' + className } key={ index }>
                    <div className='col-md-6'>
                        <h1>
                            { goal.title }
                        </h1>
                        <h2>
                            { goal.date }
                        </h2>
                        <ul className='timeline-content'>
                            { content }
                        </ul>
                    </div>
                    <div className='col-md-6'></div>
                </div>
            );
        });
    }

    render() {
        return (
            <PageWrapper showDownloads header='RoadMap' subHeader={ this.subHeader }>
                <div className='container'>
                    <div className='row'>
                        <span className='timeline-end beginning'>Launch of Tron MainNet</span>
                    </div>
                    <div className='timeline'>
                        { this.renderTimeline() }
                        <div className='timeline-col'></div>
                    </div>
                    <div className='row'>
                        <span className='timeline-end end'>End of current Roadmap</span>
                    </div>
                </div>
            </PageWrapper>
        );
    }
}

export default RoadMap;
