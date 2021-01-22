import React from "react";
import "./ContactUs.css";

function ContactUs() {
  return (
    <div className="contactUs">
      <div className="contactUs__container">
        <h4>
          Jnanaganga Residential School is situated in Panchavati, Attur,
          Harangi Post, 10km from kushalnagar and 2km from Harangi
          Dam.Beautifully landscaped, our school campus has a serene ambiance.
          Amidst this is housed an inspiring academic block, excellent hostel
          blocks, principal and staff residences, a well-designed dining hall.
        </h4>

        <div className="contactUs__card">
          <h4>Jnanaganga Residential School</h4>
          <h4> Panchavati, Attur</h4>
          <h4> Harangi Post - 571-233</h4>
          <div className="contactUs__cardPlace">
            <h4> Kodagu</h4>
          </div>
          <div className="contactUs__cardPhone">
            <h4>Phone Number :</h4>
            <div className="contactUs__cardPhoneContent">
              <h4>08276 - 277320,</h4>
              <h4>08276 - 277330,</h4>
            </div>
          </div>
          <h4>E-mail: &nbsp; jnanagangaschool@yahoo.com</h4>
          <br />
          <h3>Office Timings</h3>
          <h4>Monday to Friday: 10:00 am to 05:00 pm</h4>
          <h4>Saturday: 10:00 am to 02:00 pm</h4>
          <h4>Sunday: Hoilday</h4>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
