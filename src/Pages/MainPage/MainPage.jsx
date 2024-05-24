// useState: manages state within a component, is for managing state variable, involves declaring a variable and a function to update it.
// useEffect: handles sude effects like data fetching, subscriptions, or DOM updates.Is for executing code based on component lifecycle events (mounting, updating, unmounting) or change in dependencies. It takes a function as its first argument and an optional array of dependencies as its second argument.

import { useLocation, useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
import "./MainPage.scss";

const MainPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [setActiveLink] = useState("/ilaria's-website");

  const handleNavigation = (path) => {
    navigate(path);
    setActiveLink(path);
  };
  const isLinkActive =
    location.pathname === "/" ||
    location.pathname === "/vfx" ||
    location.pathname === "/colorzen" ||
    location.pathname.includes("/ilaria's-website");

  return (
    <div>
      <div>
        <Link className="welcome-page" to="/menu-page" />
      </div>
      <div>
        <NavLink
          className={`welcome-page ${
            location.pathnamee === "/menu-page" ? "welcome-page--active" : ""
          }`}
          to="/menu-page"
        >
          WELCOME TO MY PAGE!
        </NavLink>
      </div>
    </div>
  );
};

export default MainPage;
