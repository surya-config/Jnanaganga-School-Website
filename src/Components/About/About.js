import React from "react";
import "./About.css";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    width: "100%",
    height: "100vh",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

function About() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const [showFacultyMembers, setShowFacultyMembers] = React.useState(false);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className="about">
      <div className="about__banner"></div>

      <center>
        <h2>What We Stand For</h2>
        <p>
          At Jnanaganga, we provide an all-round education to impart academic
          excellence and ensure that our students are equipped with the tools to
          make an impact in the world.
        </p>
      </center>

      <div className={classes.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={value}
            onChange={handleChange}
            indicatorColor="secondary"
            textColor="secondary"
            variant="fullWidth"
            aria-label="full width tabs example"
            className={classes.tabs}
          >
            <Tab label="About Us" {...a11yProps(0)} />
            <Tab label="Principal" {...a11yProps(1)} />
            <Tab label="Chairman" {...a11yProps(2)} />
            <Tab label="Governing Council" {...a11yProps(3)} />
            <Tab label="Faculties" {...a11yProps(4)} />
          </Tabs>
        </AppBar>

        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <div className="about__aboutus">
              <div className="about__aboutusLeft">
                <h4>
                  JRS, with its unmatched infrastructure, has been providing
                  quality education with a holistic approach and producing
                  students with character and all-round abilities to take on the
                  challenges to excel in the modern world.
                </h4>
                <h4>
                  The Jnanaganga Education Trust (R) and the faculty work in
                  unison towards its cherished ideals. The clear intention is to
                  equip students with the knowledge and proficiency requisite
                  for creating a niche in the field of education, in a positive
                  way.
                </h4>
                <h4>
                  The past academic year has seen some of the best performances
                  by our students both in the academic, and the extracurricular
                  activities.
                </h4>
                <h4>
                  Academic excellence has been attained without question; with
                  cultural, sporting and spiritual evolution in students
                  simultaneously progressively under the guidance of exceptional
                  facilitators.
                </h4>
              </div>
              <div className="about__aboutusRight">
                <img src="/images/about.jpg" alt="" />
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <div className="about__principal">
              <div className="about__principalLeft"></div>
              <div className="about__principalRight">
                <h4>
                  Education is an unending and ongoing process and is the
                  progressive discovery of our own ignorance.We get to learn
                  something every day and our world is changededucation is such
                  a powerful weapon.
                </h4>
                <h4>
                  Nestled in the cradle of nature, the atmosphere of Jnanaganga
                  Residential School offers a remarkably optimistic campus for
                  learning. A home away from Home.
                </h4>
                <h4>
                  We have Nine hundred and eighty students and a team of
                  fortysix dedicated teachers to motivate the students to set
                  their goals, fulfil their dreams and ensure that purposeful
                  educational training of a high standard is imparted to our
                  students and to e quip them to compete for various careers and
                  course of choice in the years to come.
                </h4>
                <h4>
                  We strongly believe that our school will mould our pupil into
                  better citizens of tomorrow who would contribute positively
                  towards ourcountry,a better living and a better tomorrow.
                </h4>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <div className="about__chairman">
              <div className="about__chairmanLeft">
                <h4>
                  I deem it a great privilege to be at the helm of affairs at
                  Jnanaganga Residential School, one of the finest institutions
                  in the State. The trust has been set up with a vision to
                  create a hub of education excellence, towards nurturing human
                  resources and to provide education for all the students who
                  are in rural areas near to Kushalnagar. The name and fame, the
                  school enjoys today is the result of the hard work put in by a
                  team of dedicated and highly qualified teachers and talented
                  students.
                </h4>
                <h4>
                  Nestled in the cradle of nature, the atmosphere of Jnanaganga
                  Residential School offers a remarkably optimistic campus for
                  learning. A home away from Home.
                </h4>
                <h4>
                  We have Nine hundred and eighty students and a team of
                  fortysix dedicated teachers to motivate the students to set
                  their goals, fulfil their dreams and ensure that purposeful
                  educational training of a high standard is imparted to our
                  students and to e quip them to compete for various careers and
                  course of choice in the years to come.
                </h4>
                <h4>
                  We strongly believe that our school will mould our pupil into
                  better citizens of tomorrow who would contribute positively
                  towards ourcountry,a better living and a better tomorrow.
                </h4>
              </div>
              <div className="about__chairmanRight"></div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={3} dir={theme.direction}>
            <div className="about__council">
              <div className="about__councilRight"></div>
              <div className="about__councilLeft">
                <h4>
                  The Council is the governing body of the institution and
                  exercises general oversight over the institution and its
                  affairs.
                </h4>
                <h4>
                  It comprises twenty-two members and meets five times each year
                  (including a strategic away day). All Council members are
                  offered induction, training and development as appropriate.
                </h4>
                <h4>
                  Council members bring to its deliberations a wide range of
                  knowledge and expertise, and are expected to apply balanced
                  and disinterested judgement to these deliberations. Their main
                  assets are their independence and their objectivity, and their
                  principal contributions are:
                </h4>
                <ul>
                  <li>to see issues from all aspects</li>
                  <li>to represent an external view</li>
                  <li>to offer special skills</li>
                  <li>
                    to give an independent view on possible internal conflicts
                    of interest
                  </li>
                  <li>to provide useful contacts</li>
                  <li>to advise on the public presentation of the School</li>
                </ul>
              </div>
            </div>
          </TabPanel>
          <TabPanel value={value} index={4} dir={theme.direction}>
            <div className="about__faculties">
              {showFacultyMembers === false ? (
                <div className="about__facultiesContainer1">
                  <div className="about__facultiesFirstContainer">
                    <div className="about__facultiesLeft">
                      <h4>
                        Our teachers are equipped to play the role of mentors to
                        the students. Drawn from the best public schools and
                        possessing experience and qualification of the highest
                        standards, these teachers are passionate about guiding
                        the students to achieve success in their lives. They use
                        innovative teaching techniques, supported by modern
                        technology to arouse the intellectual curiosity of the
                        child.
                      </h4>
                      <h4>
                        JRS's teaching faculty and staff develop positive,
                        caring and supportive relationships with the students,
                        creating an extended family-like atmosphere at the
                        school.
                      </h4>
                    </div>
                    <div className="about__facultiesRight"></div>
                  </div>
                  <button onClick={() => setShowFacultyMembers(true)}>
                    Checkout all the Faculties
                  </button>
                </div>
              ) : (
                <div className="about__facultiesContainer2">
                  <button onClick={() => setShowFacultyMembers(false)}>
                    Go Back
                  </button>
                </div>
              )}
            </div>
          </TabPanel>
        </SwipeableViews>
      </div>
    </div>
  );
}

export default About;
