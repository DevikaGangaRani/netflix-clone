import React from "react";
import Logo from "../../src/assets/Logos-Readability-Netflix-logo.png";

const Header = () => {
  return (
    <div>
      <header className="topNav">
        <nav className="navbar navbar-expand-md navbar-dark">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img className="nav__logo" src={Logo} alt="" />
            </a>
            <div className="navbar">
              <form className="d-flex" role="search">
                <select>
                  <option value="English">English</option>
                  <option value="Hindi">Hindi</option>
                </select>
                <button type="button" className="btn btn-danger">
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
