import React, { useState, useEffect } from "react";
import { NavLink, useHistory, withRouter } from "react-router-dom";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import "./Navbar.css";

const Navbar = () => {
  const [width, setWidth] = React.useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
  }, [width]);

  return (
    <nav className="navbar">{width > 768 ? <DesktopNav /> : <MobileNav />}</nav>
  );
};

export default Navbar;
