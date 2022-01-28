import React from "react";
import logo from "../../images/logo.png";
import "./Header.css";
const Header = () => {
  return (
    <div className="Header">
      <div className="logo">
        <img src={logo} alt="ema-jhon-logo"></img>
      </div>
      <nav className="nav">
        <a className="nav-item" href="/shop">
          Shop
        </a>
        <a className="nav-item" href="/order-review">
          Order Review
        </a>
        <a className="nav-item" href="/manage-inventory">
          Manage Inventory
        </a>
      </nav>
    </div>
  );
};

export default Header;
