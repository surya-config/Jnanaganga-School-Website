import React, { useEffect } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

import "./TabComponent.css";

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: "white",
    width: "100%",
    minHeight: "100vh",
  },
}));

export default function TabComponent({ itemArray, itemContent }) {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

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
          {itemArray.map((item, idx) => (
            <Tab label={item} {...a11yProps(idx)} />
          ))}
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        {itemContent.map((item, idx) => (
          <TabPanel value={value} index={idx} dir={theme.direction}>
            {idx % 2 === 0 ? (
              <div className="tabComponent__main">
                <div className="tabComponent__container">
                  <div className="tabComponent__left">
                    {item.itemImage ? item.itemImage : null}
                  </div>
                  <div className="tabComponent__right">
                    {item.itemContent?.map((para) => (
                      <h5>{para}</h5>
                    ))}
                  </div>
                </div>
                <div className="tabComponent__container">
                  <div className="tabComponent__right">
                    {item.itemContent2?.map((para) => (
                      <h5>{para}</h5>
                    ))}
                  </div>
                  <div className="tabComponent__left">
                    {item.itemSecondImage ? item.itemSecondImage : null}
                  </div>
                </div>
              </div>
            ) : (
              <div className="tabComponent__main">
                <div className="tabComponent__container">
                  <div className="tabComponent__right">
                    {item.itemContent.map((para) => (
                      <h5>{para}</h5>
                    ))}
                  </div>
                  <div className="tabComponent__left">{item.itemImage}</div>
                </div>
                <div className="tabComponent__container">
                  <div className="tabComponent__left">
                    {item.itemSecondImage ? item.itemSecondImage : null}
                  </div>
                  <div className="tabComponent__right">
                    {item.itemContent2?.map((para) => (
                      <h5>{para}</h5>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </TabPanel>
        ))}
      </SwipeableViews>
    </div>
  );
}
