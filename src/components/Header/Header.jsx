// useState: manages state within a component, is for managing state variable, involves declaring a variable and a function to update it.
// useEffect: handles sude effects like data fetching, subscriptions, or DOM updates.Is for executing code based on component lifecycle events (mounting, updating, unmounting) or change in dependencies. It takes a function as its first argument and an optional array of dependencies as its second argument.

import { useLocation, useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./Header.scss";

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [setActiveLink] = useState("/ilaria's-website");

  const handleNavigation = (path) => {
    navigate = path;
    setActiveLink = path;
  };
  return <div>HELLO!</div>;
};
export default Header;
