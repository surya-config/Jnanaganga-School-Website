import React from "react";
import TabComponent from "../TabComponent";
import "./SchoolLife.css";

import { schoolLifeData } from "./SchoolLifeData";

function SchoolLife() {
  return (
    <div className="schoolLife">
      <TabComponent
        itemArray={[
          "Events and Activities",
          "Sports",
          "Health Care",
          "Boarding",
          "Food",
          "Treks and Tours",
        ]}
        itemContent={schoolLifeData}
      />
    </div>
  );
}

export default SchoolLife;
