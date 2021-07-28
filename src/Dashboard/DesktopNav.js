import React, { useState, useEffect } from "react";
import { NavLink, useHistory, withRouter } from "react-router-dom";
import "./Navbar.css";

const DesktopNav = () => {
  const history = useHistory();

  return (
    <div className="navbar__container">
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        exact
        to="/"
      >
        <div className="navitem">
          <h4>Home</h4>
        </div>
      </NavLink>

      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        exact
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
        to="/academics"
      >
        <div className="navitem">
          <h4>Academics</h4>
        </div>
      </NavLink>

      <div className="header__logoContainer">
        <img
          className="header__logo"
          src="/images/logo.jpg"
          alt="rounded-image"
        />
      </div>
      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/school-life"
      >
        <div className="navitem">
          <h4>School Life</h4>
        </div>
      </NavLink>

      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/media"
      >
        <div className="navitem">
          <h4>Gallery</h4>
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

      <NavLink
        activeClassName="navbar__link--active"
        className="navbar__link"
        to="/contact"
      >
        <div className="navitem">
          <h4>Contact Us</h4>
        </div>
      </NavLink>
    </div>
  );
};

export default DesktopNav;
