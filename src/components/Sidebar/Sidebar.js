import React from "react";
import Logo from "../../assets/logo.svg";
import "./sidebar.scss";

const Sidebar = () => {
  return (
    <>
      <aside className="aside">
        <a href="#home" className="nav__logo">
          <img src={Logo} alt="" />
        </a>
        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-user-following"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-briefcase"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-graduation"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-layer"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-note"></i>
                </a>
              </li>
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav__footer">
          <span className="copyright">&copy; 2022-2023</span>
        </div>
      </aside>
      <div className="nav__toogle">
        <i className="icon-menu"></i>
      </div>
    </>
  );
};

export default Sidebar;
