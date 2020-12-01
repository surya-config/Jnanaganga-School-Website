import { BrowserRouter as Router } from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";

import ExpandLessIcon from "@material-ui/icons/ExpandLess";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="GotoTop" onClick={() => window.scrollTo(0, 0)}>
        <ExpandLessIcon />
      </div>
      <Dashboard />
    </Router>
  );
}

export default App;
