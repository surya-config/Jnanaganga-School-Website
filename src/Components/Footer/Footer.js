import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer">
      {/* 1. First Container
                1. About 
                2. Admission
                3. School life
          2. Second Container
                1.careers
                2.Gallery
                etc.
        3. Copyright
      */}
      <center>
        <h1>Quick Links</h1>
      </center>
      <div className="footer__topContainer">
        <div className="footer__topContainerContent">
          <h2>About</h2>
          <h4>About Trust</h4>
          <h4>Vision & Mission</h4>
          <h4>Director Message</h4>
          <h4>Secretary Message</h4>
          <h4>JES</h4>
        </div>
        <div className="footer__topContainerContent">
          <h2>Admission</h2>
          <h4>Admission Process</h4>
          <h4>Apply Online Form</h4>
        </div>
        <div className="footer__topContainerContent">
          <h2>School Life</h2>
          <h4>Co-Curricular Activities</h4>
          <h4>Celebrations</h4>
          <h4>Sports & Fitness</h4>
          <h4>House System</h4>
          <h4>Achievements</h4>
        </div>
      </div>
      <div className="footer__middleContainer">
        <h4>Careers</h4>
        <h4>Photo Album</h4>
        <h4>Bulletin Board</h4>
        <h4>Events</h4>
        <h4>Videos</h4>
        <h4>Contact Us</h4>
        <h4>Sitemap</h4>
      </div>
      <div className="footer__bottomContainer">
        <h5>Copyright Reserved - 2020</h5>
        <h5>JES</h5>
      </div>
    </div>
  );
}

export default Footer;
