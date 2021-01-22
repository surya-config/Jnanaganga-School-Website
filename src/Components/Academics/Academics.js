import React from "react";
import TabComponent from "../TabComponent";
import "./Academics.css";

import { academicsData } from "./AcademicsContent";

function Academics() {
  return (
    <div className="academics">
      <h1>Academics</h1>
      <TabComponent
        itemArray={["Curriculum", "Library", "JRS's Achievers", "Laboratories"]}
        itemContent={academicsData}
      />
    </div>
  );
}

export default Academics;
