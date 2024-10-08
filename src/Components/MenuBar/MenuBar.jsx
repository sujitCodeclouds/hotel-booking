import React from "react";
import Logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function MenuBar() {
  let isLoggedIn = localStorage.getItem("isloggedin") === "yes" ? true : false;
  const navigate = useNavigate();
  const handelLogout = (e) => {
    localStorage.removeItem("isloggedin");
    navigate("/");
  };
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            width="250"
            height="62"
            className="d-inline-block align-top"
            alt="logo"
          />
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
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ display: isLoggedIn ? "block" : "none" }}
            >
              <Link
                className="nav-link active"
                aria-current="page"
                to="/hotels"
              >
                Booking Info
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ display: isLoggedIn ? "none" : "block" }}
            >
              <Link className="nav-link active" aria-current="page" to="/login">
                Login
              </Link>
            </li>
            <li
              className="nav-item"
              style={{ display: isLoggedIn ? "block" : "none" }}
            >
              <Link
                className="nav-link active"
                aria-current="page"
                onClick={handelLogout}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default MenuBar;
