import React from "react";
import { Link } from "react-router-dom";
import "../components/navbar.scss";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="row">
          <div className="nav_logo col-6">
            <h3>Floral Studi</h3>
          </div>
          <div className="col-6">
            <ul className="lists">
              <li className="list">
                <Link className="link" to="">
                 Home
                </Link>
              </li>
              <li className="list">
                <Link className="link" to="form">
                 Add
                </Link>
              </li>
              <li className="list">
                <Link className="link" to="about">
                About
                </Link>
              </li>
              <li className="list">
                <Link className="link" to="blog">
                  Blog
                </Link>
              </li>
              <li className="list">
                <Link className="link" to="portfolio">
                  Portfolio
                </Link>
              </li>
              <li className="list">
                <Link className="link" to="services">
                  Services
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
