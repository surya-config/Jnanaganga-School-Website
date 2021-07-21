import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
                alt="logo"
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
              exact
              to="/"
            >
              <div className="navitem" onClick={handleDisableSidebar}>
                <h4>Home</h4>
              </div>
            </NavLink>

            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              exact
              to="/about"
            >
              <div className="navitem" onClick={handleDisableSidebar}>
                <h4>About Us</h4>
              </div>
            </NavLink>

            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/admission"
            >
              <div className="navitem" onClick={handleDisableSidebar}>
                <h4>Admission</h4>
              </div>
            </NavLink>

            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/academics"
            >
              <div className="navitem" onClick={handleDisableSidebar}>
                <h4>Academics</h4>
              </div>
            </NavLink>

            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/school-life"
            >
              <div className="navitem" onClick={handleDisableSidebar}>
                <h4>School Life</h4>
              </div>
            </NavLink>

            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/media"
            >
              <div className="navitem" onClick={handleDisableSidebar}>
                <h4>Gallery</h4>
              </div>
            </NavLink>

            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/careers"
            >
              <div className="navitem" onClick={handleDisableSidebar}>
                <h4>Careers</h4>
              </div>
            </NavLink>

            <NavLink
              activeClassName="navbar__link--active"
              className="navbar__link"
              to="/contact"
            >
              <div className="navitem" onClick={handleDisableSidebar}>
                <h4>Contact Us</h4>
              </div>
            </NavLink>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
