import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt="ema-jhon-logo"></img>
      </div>
      <nav className="nav">
        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "yellow" : "white",
              fontSize: isActive ? "24px" : "18",
              textDecoration: "none",
            };
          }}
          to="/shop"
        >
          Shop
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "yellow" : "white",
              fontSize: isActive ? "24px" : "18",
              textDecoration: "none",
            };
          }}
          to="/order-review"
        >
          Order Review
        </NavLink>

        <NavLink
          style={({ isActive }) => {
            return {
              color: isActive ? "yellow" : "white",
              fontSize: isActive ? "24px" : "18",
              textDecoration: "none",
            };
          }}
          to="/manage-inventory"
        >
          Manage Inventory
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
