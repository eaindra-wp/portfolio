import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/Eaindra.jpg";
      var bio = this.props.data.bio;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var mailbox =  this.props.data.address.mailbox;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var resumeDownload = this.props.data.resumedownload;
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Tim Baker Profile Pic" />
         </div>
         <div className="nine columns main-col">
            <h2>About Me</h2>

            <p>{bio}</p>
            <div className="row">
               <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
						   <span role="img" aria-label="home">🏠&nbsp; {street}, {zip} <br /> &nbsp; &nbsp; &nbsp; {city}, {state} <br />
                     <span role="img" aria-label="mail">📬&nbsp; {mailbox}</span>
                   </span><br />
						   <span role="img" aria-label="phone">📱&nbsp; {phone}</span><br />
                     <span role="img" aria-label="email">📧&nbsp; <a href="mailto: {eaindra719@gmail.com}">{email}</a></span>
                     
					   </p>
               </div>
               <div className="columns download">
                  <p>
                     <a href={resumeDownload} className="button"><i className="fa fa-download"></i>Download Resume</a>
                  </p>
               </div>
            </div>
         </div>
      </div>

   </section>
    );
  }
}

export default About;
