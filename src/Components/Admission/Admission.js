import React, { useState, useEffect } from "react";
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

import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    width: "100%",
    minHeight: "100vh",
    marginTop:"50px"
  },
}));

function Admission() {
  const classes = useStyles();
  const [value, setValue] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant={`${width > 768 ? "fullWidth" : "scrollable"}`}
          aria-label="full width tabs example"
        >
          <Tab label="Rules and Regulations" {...a11yProps(0)} />
          <Tab label="Application Form" {...a11yProps(1)} />
          <Tab label="Fee Structure" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Rules and Regulations
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AdmissionForm />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Fee Structure
      </TabPanel>
    </div>
  );
}

export default Admission;
