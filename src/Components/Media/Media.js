import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Media.css";

function Media() {
  const [switchBar, setSwitchBar] = useState(0);

  return (
    <div className="media">
      {switchBar === 0 && (
        <div className="imagesRow">
          <div className="imageContainer" onClick={() => setSwitchBar(1)}>
            <img src="/images/annual_day.jpg" alt="Annual Day" />
          </div>
          <div className="imageContainer" onClick={() => setSwitchBar(2)}>
            <img src="/images/facilities_doctor.jpg" alt="Facilities" />
          </div>
          <div className="imageContainer" onClick={() => setSwitchBar(3)}>
            <img src="/images/activities.jpg" alt="Activities" />
          </div>
          <div className="imageContainer" onClick={() => setSwitchBar(4)}>
            <img src="/images/sports.jfif" alt="Sports" />
          </div>
        </div>
      )}

      {switchBar === 1 && (
        <div className="annualDayComponent">
          <h1>Annual Day</h1>
        </div>
      )}

      {switchBar === 2 && (
        <div className="facilitiesComponent">
          <h1>Facilities</h1>
        </div>
      )}
    </div>
  );
}

export default Media;
