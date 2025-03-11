import React from "react";
import { Link } from "react-router-dom";
import logo from "../landing_page/images/Finedgelogo.jpg"; // ✅ Logo Path Verify किया

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light sticky-top border-bottom" style={{ backgroundColor: "#ffffff" }}>
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Finedge Logo" style={{ width: "150px" }} />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/product">Product</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/pricing">Pricing</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/support">Support</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link btn btn-primary text-white" to="/register" style={{ padding: "10px 20px", borderRadius: "5px" }}>
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
