import React from 'react';

import PageWrapper from 'components/PageWrapper';

import './style.css';

class SuperRepresentative extends React.Component {
    timeline = [
        {
            title: 'Very long title here lorem ipsum dolores sit',
            date: 'April 2018',
            content: [
                'List item example',
                'List item example',
                'List item example'
            ]
        },
        {
            title: 'Very long title here lorem ipsum dolores sit',
            date: 'May 2018'
        },
        {
            title: 'Very long title here lorem ipsum dolores sit',
            date: 'April 2018'
        },
        {
            title: 'Very long title here lorem ipsum dolores sit',
            date: 'May 2018',
            content: [
                'List item example',
                'List item example',
                'List item example'
            ]
        },
        {
            title: 'Very long title here lorem ipsum dolores sit',
            date: 'April 2018',
            content: [
                'List item example',
                'List item example',
                'List item example'
            ]
        },
        {
            title: 'Very long title here lorem ipsum dolores sit',
            date: 'Q2 - 2019'
        },
        {
            title: 'Very long title here lorem ipsum dolores sit',
            date: 'Q2 - 2019'
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
            <PageWrapper showDownloads header='Super Representative Timeline' subHeader={ this.subHeader }>
                <div className='container'>
                    <div className='row'>
                        <span className='timeline-end beginning'>Beginning of the time</span>
                    </div>
                    <div className='timeline'>
                        { this.renderTimeline() }
                        <div className='timeline-col'></div>
                    </div>
                    <div className='row'>
                        <span className='timeline-end end'>Goal</span>
                    </div>
                </div>
            </PageWrapper>
        );
    }
}

export default SuperRepresentative;
