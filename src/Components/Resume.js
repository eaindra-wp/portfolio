import React, { Component } from 'react';

class Resume extends Component {
  render() {
    function split_text(given) {
      var text = given + ""
      return text.split('\n').map((item, key) => <span key={key}>{item}<br /></span>)
    }

    if (this.props.data) {
      var education = this.props.data.education.map(function (education) {
        return <div key={education.school}><h3>{education.school}</h3>
          <p className="info">{education.degree} <span>&bull;</span><em className="date">{education.graduated}</em></p>
          <p><b>First-Year Courses:</b> {education.first_yr}<br /><b>Second-Year Courses: </b>{education.second_yr}</p></div>
      })

      var work = this.props.data.work.map(function (work) {
        return <div key={work.company}><h3>{work.company}</h3>
          <p className="info">{work.title}<span>&bull;</span> <em className="date">{work.years}</em></p>
          <p>{work.description}</p>
        </div>
      })

      var curricular = this.props.data.curricular.map(function (curricular) {
        return <div key={curricular.name}><h3>{curricular.name}</h3>
          <p className="info">{curricular.title}<span>&bull;</span> <em className="date">{curricular.years}</em></p>
          <p>{split_text(curricular.description)}</p>
        </div>
      })

      var skills = this.props.data.skills.map(function (skills) {
        var className = 'bar-expand ' + skills.name;
        return <li key={skills.name}><span style={{ width: skills.level }} className={className}></span><em>{skills.name}</em></li>
      })

      var languages = this.props.data.languages.map(function (languages) {
        return <div key={languages.level}>

          <div class="row">
            <div class="four columns">
              <h5 classname="language-lan">{languages.lan}</h5>
            </div>
            <div class="four columns">
              <span classname="language-level">{languages.level}</span>
            </div>
          </div>
        </div>
      })
    }

    return (
      <section id="resume">

        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
                {education}
              </div>
            </div>
          </div>
        </div>


        <div className="row work">

          <div className="three columns header-col">
            <h1><span>Work</span></h1>
          </div>

          <div className="nine columns main-col">
            {work}
          </div>
        </div>

        <div className="row curricular">
          <div className="three columns header-col">
            <h1><span>Extra-Curricular <br /> <br /> Activities</span></h1>
          </div>
          <div className="nine columns main-col">
            {curricular}
          </div>
        </div>

        <div className="row languages">
          <div className="three columns header-col">
            <h1><span>Languages</span></h1>
          </div>
          <div className="nine columns main-col">
            {languages}
          </div>
        </div>

        <div className="row skill">
          <div className="three columns header-col">
            <h1><span>Skills</span></h1>
          </div>

          <div className="nine columns main-col">

            <div className="bars">
              <ul className="skills">
                {skills}
              </ul>
            </div>
          </div>
        </div>

      </section>
    );
  }
}

export default Resume;
