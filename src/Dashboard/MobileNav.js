import React, { useState, useEffect } from "react";
import { NavLink, useHistory, withRouter } from "react-router-dom";
import "./Navbar.css";

import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { IconButton } from "@material-ui/core";

const MobileNav = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(true);
  };

  const handleDisableSidebar = () => {
    setShowSidebar(false);
  };

  return (
    <div className="mobileNav">
      {showSidebar === false ? (
        <div className="mobilenavbar__disableContainer">
          <div className="menuIcon">
            <IconButton onClick={handleShowSidebar}>
              <MenuIcon />
            </IconButton>
          </div>
          <div className="mobileheader__logoContainer">
            <img
              className="mobileheader__logo"
              src="/images/logo.jpg"
              alt="rounded-image"
            />
          </div>
        </div>
      ) : (
        <div className="mobilenavbar__showContainer">
          <IconButton onClick={handleDisableSidebar} className="closeBtn">
            <CloseIcon />
          </IconButton>
          <div className="mobilenavbar__showContainerLinks">
            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/"
            >
              <div className="navitem">
                <h4>Home</h4>
              </div>
            </NavLink>

            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/about"
            >
              <div className="navitem">
                <h4>About Us</h4>
              </div>
            </NavLink>

            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/admission"
            >
              <div className="navitem">
                <h4>Admission</h4>
              </div>
            </NavLink>

            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/student-life"
            >
              <div className="navitem">
                <h4>Student Life</h4>
              </div>
            </NavLink>

            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/media"
            >
              <div className="navitem">
                <h4>Media</h4>
              </div>
            </NavLink>

            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/careers"
            >
              <div className="navitem">
                <h4>Careers</h4>
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
