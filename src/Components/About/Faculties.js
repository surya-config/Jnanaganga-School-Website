import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "./Faculties.css";
import Faculty from "./Faculty";
import { arrayOfFaculties } from "./FacultyContent";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
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
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: 350,
    color: "black",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function Faculties() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="faculties">
      <div className={classes.root}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          className={classes.tabs}
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab label="Department of Languages" {...a11yProps(0)} />
          <Tab label="Department of Science" {...a11yProps(1)} />
          <Tab label="Department of Humanities" {...a11yProps(2)} />
          <Tab label="Department of Mathematics" {...a11yProps(3)} />
          <Tab label="Department of  Computer Science" {...a11yProps(4)} />
          <Tab label="Department of Sports" {...a11yProps(5)} />
          <Tab label="Other Departments" {...a11yProps(6)} />
        </Tabs>
        <TabPanel value={value} index={0}>
          <div className="faculties__dept">
            <div className="langDept">
              <h1>Department of English</h1>
              <div className="dept__content">
                {arrayOfFaculties[0].Languages.English.map((faculty) => (
                  <Faculty
                    image={faculty.image}
                    name={faculty.name}
                    designation={faculty.designation}
                  />
                ))}
              </div>
            </div>
            <div className="langDept">
              <h1>Department of Kannada</h1>

              <div className="dept__content">
                {arrayOfFaculties[0].Languages.Kannada.map((faculty) => (
                  <Faculty
                    image={faculty.image}
                    name={faculty.name}
                    designation={faculty.designation}
                  />
                ))}
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
        <TabPanel value={value} index={3}>
          Item Four
        </TabPanel>
        <TabPanel value={value} index={4}>
          Item Five
        </TabPanel>
        <TabPanel value={value} index={5}>
          Item Six
        </TabPanel>
        <TabPanel value={value} index={6}>
          Item Seven
        </TabPanel>
      </div>
    </div>
  );
}

export default Faculties;
