import React from 'react';
import FontAwesome from 'react-fontawesome'

import 'components/App/styles/team.css';
import Page from 'components/App/Page';

class Team extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      members : [
        {
          name : "Antoine Portaria",
          title : "Founder",
          desc : "With a little, more than 12 years in Software Development Antoine main focus is to find some innovative idea to make the Tron Community a better place. Making sure",
          img : {backgroundImage:"url()"},
          twitter : "https://twitter.com/The_Magalon"
        },
        {
          name : "Sebastian Nolin",
          title : "UI/UX Designer",
          desc : "With more than 15 years experience, Sebastien specializes in improving the production process, innovating the techniques of using the tools of creation and advocate the use of talents and team accomplishment in order to complete all types of projects.",
          img : {backgroundImage:"url()"},
          twitter : "https://twitter.com/sebnolin"
        },
        {
          name : "Tayler King",
          title : "Developer",
          desc : "Youngest member of the team, Tayler is a very smart and efficient developer.",
          img : {backgroundImage:"url()"},
        },
        {
          name : "Robert Valentyne",
          title : "Developer",
          desc : "",
          img : {backgroundImage:"url()"},
        },
        {
          name : "Tommy Pudel",
          title : "Frontend Developer",
          desc : "",
          img : {backgroundImage:"url()"},
        },
        {
          name : "Martin Hoffman",
          title : "Developer",
          desc : "With 15 years dev experience, Martin comes from a video game background and will focus on building the tron.watch API backend, and developing DApps on the Tron network.",
          img : {backgroundImage:"url()"},
          twitter : "https://twitter.com/i_418_i"
        }
      ]
    };
  }

  static getIcon(type, content){
    if(content){
      return (
        <a target='_blank' href={content}>
        <FontAwesome
          className='team-member-social-icon'
          name={type}/>
        </a>
      );
    }
  }

  getMembers(){
    let output = [];
    for(let i in this.state.members){
      let member = this.state.members[i];
      output.push(
        <div key={i} className='col-lg-4 team-member-card'>
          <div className='team-member-card-inner'>
            <div className='team-member-photo' style={member.img}/>
            <h4 className='team-member-name'>{member.name}</h4>
            <h5 className='team-member-title'>{member.title}</h5>
            <p className='team-member-desc'>{member.desc}</p>

            <p className='team-member-social'>
              {Team.getIcon('linkedin', member.linkedin)}
              {Team.getIcon('facebook', member.facebook)}
              {Team.getIcon('twitter', member.twitter)}
            </p>
          </div>
        </div>
      )
    }
    return output;
  }

  static getHeaderTitle(){
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
      <Page header_title="Our Team" header_desc={Team.getHeaderTitle()}>

        <div className='col'>
          <div className='row team-members-container'>
            <div className='col-lg-1'/>
            <div className='col'>
              <div className='row team-members-container-inner'>
                {this.getMembers()}
              </div>
            </div>
            <div className='col-lg-1'/>
          </div>
        </div>

      </Page>
    );
  }
}

export default Team;
