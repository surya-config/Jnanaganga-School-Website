import React from "react";
import "./Dashboard.css";
import Navbar from "./Navbar";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  withRouter,
} from "react-router-dom";
import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Admission from "../Components/Admission/Admission";
import SchoolLife from "../Components/SchoolLife/SchoolLife";
import Media from "../Components/Media/Media";
import Careers from "../Components/Careers/Careers";
import Footer from "../Components/Footer/Footer";
import Academics from "../Components/Academics/Academics";
import ContactUs from "../Components/Contact Us/ContactUs";

function Dashboard() {
  return (
    <Router>
      <div className="dashboard">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/admission" component={Admission} />
          <Route exact path="/admission/rules" component={Admission} />
          <Route exact path="/admission/application" component={Admission} />
          <Route exact path="/school-life" component={SchoolLife} />
          <Route exact path="/media" component={Media} />
          <Route exact path="/careers" component={Careers} />
          <Route exact path="/academics" component={Academics} />
          <Route exact path="/contact" component={ContactUs} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default Dashboard;
