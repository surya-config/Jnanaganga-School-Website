import React from "react";
import "./Admission.css";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";
import AdmissionForm from "./AdmissionForm";
import AdmissionRules from "./AdmissionRules";
import TabComponent from "../TabComponent";

function Admission() {
  return (
    <div>
      <AdmissionForm />
    </div>
  );
}

export default Admission;
