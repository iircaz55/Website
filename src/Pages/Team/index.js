import React from 'react';
import FontAwesome from 'react-fontawesome'

import PageWrapper from 'components/PageWrapper';

import './style.css';

class Team extends React.Component {
    get members() {
        return [
            {
                name: 'Antoine Portaria',
                title: 'Founder',
                desc: 'With a little more than 12 years in Software Development, Antoine\'s main focus is to find fresh and innovative ideas to make the Tron Community a better place. Blockchain has always fascinated him since he had first heard about it. By utilizing this technology, Antoine helps to create outstanding applications and services.',
                img: { backgroundImage:'url(../images/antoine_pic.png)' },
                twitter: 'https://twitter.com/The_Magalon',
                github: 'https://github.com/Magalon'
            },
            {
                name: 'Metjm',
                title: 'Developer',
                desc: 'Metjm has 15 years of development experience in many areas of programming. He comes from a video-game influenced background and will focus on building tron.watch\'s API backend, along with developing a wide range of DApps for the Tron network.',
                img: { backgroundImage:'url()' },
                twitter: 'https://twitter.com/i_418_i',
                github: 'https://github.com/metjm'
            },
            {
                name: 'Sebastian Nolin',
                title: 'UI/UX Designer',
                desc: 'Sebastien has been a UI/UX Designer for more than 15 years. He specializes in improving the production process, utilizing design and layout techniques to improve positive user interaction, and advocates the use of talents and team accomplishment in order to complete all types of projects in a timely manor.',
                img: { backgroundImage:'url(../images/seb_pic.png)' },
                twitter: 'https://twitter.com/sebnolin',
                github: 'https://github.com/sebnolin'

            },
            {
                name: 'Tayler King',
                title: 'Developer',
                desc: 'The youngest member of the team Tayler. He is a very intelligent developer who has been developing Web Applications for more than 8 years. He found interest in blockchain technology 3 years ago and started to learn all he possibly could about it. He has worked on multiple applications that scaled to thousands of current users and is confident in his abilities.',
                img: { backgroundImage:'url(../images/tayler_pic.png)' },
                github: 'https://github.com/Kondax'
            },
            {
                name: 'Tommy Pudel',
                title: 'Frontend Developer',
                desc: 'Excelling in Front-End development, Tommy has worked as a fullstack web developer for the past 4 years before taking a focus on frontend development. Taking each project he touches to the next level, Tommy is always looking for new tech to make the job both better working, and better looking.',
                img: { backgroundImage:'url(../images/tommy_pic.png)' },
                github: 'https://github.com/tpudel'
            }
        ];
    }

    getIcon(type, content) {
        if(!content)
            return null;

        return (
            <a target='_blank' href={ content }>
                <FontAwesome
                    className='team-member-social-icon'
                    name={ type }
                />
            </a>
        );
    }

    renderMembers() {
        return this.members.map((member, index) => {
            return (
                <div key={ index } className='col-lg-4 team-member-card'>
                    <div className='team-member-card-inner'>
                        <div className='team-member-photo' style={ member.img }></div>
                        <h4 className='team-member-name'>
                            { member.name }
                        </h4>
                        <h5 className='team-member-title'>
                            { member.title }
                        </h5>
                        <div className='team-member-desc-holder'>
                            <p className='team-member-desc'>
                                { member.desc }
                            </p>
                        </div>
                        <p className='team-member-social'>
                            { this.getIcon('linkedin', member.linkedin) }
                            { this.getIcon('facebook', member.facebook) }
                            { this.getIcon('twitter', member.twitter) }
                            { this.getIcon('github', member.github) }
                        </p>
                    </div>
                </div>
            )
        });
    }

    get subHeader() {
        return (
            <span>
                Our team consists of members from all around the world.<br/>
                We have decades of combined experience regarding enterprise development and networking services, <br/>
                along with multiple years of experience in designing, building and maintaining blockchain applications.
            </span>
        );
    }

    render() {
        return (
            <PageWrapper showDownloads header='Our Team' subHeader={ this.subHeader }>
                <div className='col'>
                    <div className='row team-members-container'>
                        <div className='container'>
                            <div className='row team-members-container-inner'>
                                { this.renderMembers() }
                            </div>
                        </div>
                    </div>
                </div>
            </PageWrapper>
        );
    }
}

export default Team;
