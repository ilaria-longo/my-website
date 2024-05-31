import { useLocation, useNavigate } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";
import React, { useState } from "react";
// import MainPage from "../MainPage/MainPage";
import "./MenuPage.scss";

const MenuPage = () => {
  const location = useLocation();
  // const navigate = useNavigate();
  // const [setActiveLink] = useState("/ilaria's-website");

  // const handleNavigation = (path) => {
  //   navigate(path);
  //   setActiveLink(path);
  // };
  const isLinkActive =
    location.pathname === "/menu-page" ||
    location.pathname === "/demo-reel" ||
    location.pathname === "/colorzen" ||
    location.pathname.includes("/ilaria's-website");
  return (
    <div>
      <div className="nav-link">
        <NavLink
          className={`nav-link ${
            location.pathname === "/colorzen" ? "nav-link--active" : ""
          }`}
          to="/colorzen"
        >
          ColorZen
        </NavLink>
      </div>
      <div>
        <NavLink
          className={`nav-link ${
            location.pathname === "/vfx" ? "nav-link--active" : ""
          }`}
          to="/demo-reel"
        >
          Demo Reel
        </NavLink>
      </div>
    </div>
    //     <div>
    //     <Link className="menu-page" to="/"></Link>
    //   </div>
    //    <NavLink
    //     className={`nav-link ${isLinkActive ? "nav-link--active" : ""}`}
    //     to="/"
    //   ></NavLink>
    //   <div className="nav-link">
    //     <NavLink
    //       className={`nav-link ${
    //         location.pathname === "/colorzen" ? "nav-link--active" : ""
    //       }`}
    //       to="/colorzen"
    //     >
    //       ColorZen
    //     </NavLink>
    //   </div>

    //   <div>
    //     <NavLink
    //       className={`nav-link ${
    //         location.pathname === "/vfx" ? "nav-link--active" : ""
    //       }`}
    //       to="/vfx"
    //     >
    //       VFX
    //     </NavLink>
    //     </div>
  );
};

export default MenuPage;
