import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import zerodha_Logo from "../assets/images/logo.svg";

const Navbar = () => {
  return (
    <div
      className="navbar"
      style={{
        boxShadow: "2px 1px 2px #eee",
        width: "100%",
        position: "fixed",
        backgroundColor: "#fff",
        height: "60px",
        top: "0",
        zIndex: 1000,
      }}
    >
      <div
        className="container"
        style={{
          maxWidth: "75%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0 30px",
        }}
      >
        <div><Link to="/">
          <img
            style={{
              height: "17px",
            }}
            src={zerodha_Logo}
            alt="Logo"
          /></Link>
        </div>

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Link to="/signup" style={{ textDecoration: "none", color: "inherit" ,  }}>
            Signup
          </Link>
          <Link to="/about" style={{ textDecoration: "none", color: "inherit" }}>
            About
          </Link>
          <Link to="/product" style={{ textDecoration: "none", color: "inherit" }}>
            Products
          </Link>
          <Link to="/pricing" style={{ textDecoration: "none", color: "inherit" }}>
            Pricing
          </Link>
          <Link to="/support" style={{ textDecoration: "none", color: "inherit" }}>
            Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
