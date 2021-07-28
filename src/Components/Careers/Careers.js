import React from "react";
import "./Careers.css";

function Careers() {
  return (
    <div className="careers">
      <div className="careersContainer">
        <div className="careersContainerLeft">
          <h4>
            Jnanaganga Residential School offers a unique work experience. We
            look for candidates from different backgrounds and with diverse
            experience.
          </h4>
          <h4>
            At Jnanaganga Residential School, we believe that education is
            training for life. If you have the passion to ignite young minds and
            train them to be 'global citizens' please forward your resume to us.
          </h4>
          <h4>
            We value candidates with integrity, honesty and commitment who are
            eager to take on challenges.
          </h4>
          <h4>
            You can send your resume to{" "}
            <a href="mailto:jnanagangaschool@yahoo.com">
              jnanagangaschool@yahoo.com
            </a>
          </h4>
        </div>
        <div className="carrersContainerRight"></div>
      </div>
    </div>
  );
}

export default Careers;
