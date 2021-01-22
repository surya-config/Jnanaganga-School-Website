import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import "./Home.css";

import CountUp from "react-countup";
import { Avatar } from "@material-ui/core";

import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";

const useStyles = makeStyles((theme) => ({
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

function Home() {
  let listener = null;
  const classes = useStyles();
  const [showCounter, setShowCounter] = useState(false);

  useEffect(() => {
    listener = document.addEventListener("scroll", (e) => {
      var scrolled = document.scrollingElement.scrollTop;
      if (scrolled >= 50) {
        setShowCounter(true);
      } else {
        setShowCounter(false);
      }
    });
    return () => {
      document.removeEventListener("scroll", listener);
    };
  }, [showCounter]);

  return (
    <div className="home">
      <div
        className="home__banner"
        style={{
          background: "url('/images/home_banner.jpg') center center no-repeat",
        }}
      >
        <h2>Welcome to JRS</h2>
      </div>
      <div className="home__counter">
        <div className="home__counterItem">
          {showCounter ? (
            <CountUp
              className="home__counter"
              start={100}
              end={55}
              duration={5}
              delay={0}
            >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          ) : (
            55
          )}

          <h3>TEACHING STAFF</h3>
        </div>

        <div className="home__counterItem">
          {showCounter ? (
            <CountUp
              className="home__counter"
              start={100}
              end={1000}
              duration={5}
              delay={0}
            >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          ) : (
            1000
          )}
          <h3>STUDENT STRENGTH</h3>
        </div>

        <div className="home__counterItem">
          {showCounter ? (
            <CountUp
              className="home__counter"
              start={100}
              end={44}
              duration={5}
              delay={0}
            >
              {({ countUpRef }) => (
                <div>
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          ) : (
            44
          )}
          <h3>NON-TEACHING STAFF</h3>
        </div>
      </div>

      <div className="home__contentContainer">
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <Spring
              delay={800}
              to={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0px)" : "translateY(-120px)",
              }}
            >
              {(props) => (
                <div
                  className="home__contentLeftContainer"
                  style={{ ...props }}
                >
                  <h1>Welcome to Jnanaganga Residential School</h1>
                  <p>
                    Jnanaganga Residential School was established in the year
                    2002 and located in natures cradle, 7 km from Kushalnagar
                    and just 2 km from Harangi. Jnanaganga Educational School,
                    with its unmatched infrastructure, has been providing
                    quality education with a holistic approach and producing
                    students with character and all-round abilities to take on
                    the challenges to excel in the modern world.
                  </p>
                  <p>
                    Academic excellence has been attained without question; with
                    cultural, sporting and spiritual evolution in students
                    simultaneously progressively under the guidance of
                    exceptional facilitators.
                  </p>
                </div>
              )}
            </Spring>
          )}
        </VisibilitySensor>

        <div
          className="home__contentRightContainer"
          style={{
            background: "url('/images/home_schoolpic.jpg') center ",
          }}
        ></div>
      </div>

      <div className="home__topperList">
        <h2>Toppers List 2020-21</h2>
        <div className="home__topperImages">
          <div className="home__topperContent">
            <Avatar className={classes.large} />
            <h5>Surya G</h5>
            <h6>95%</h6>
          </div>
          <div className="home__topperContent">
            <Avatar className={classes.large} />
            <h5>Harshith</h5>
            <h6>95%</h6>
          </div>
          <div className="home__topperContent">
            <Avatar className={classes.large} />
            <h5>Tejas Gowda S</h5>
            <h6>95%</h6>
          </div>
          <div className="home__topperContent">
            <Avatar className={classes.large} />
            <h5>Sukesh</h5>
            <h6>95%</h6>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

// https://prod.liveshare.vsengsaas.visualstudio.com/join?6D10387437241E95E1D8A5213A35E2D29D5A
