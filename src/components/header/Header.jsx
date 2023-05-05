import React, { useState } from "react";
import "./header.css";

const Header = () => {
  /*      Chane background Header     */
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  /*      TOGGLE MENU     */
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Agie
        </a>

        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active__link" : "nav__link"
                }
              >
                <i className="uil uil-home nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="uil uil-user-exclamation nav__icon"></i> About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#experience"
                onClick={() => setActiveNav("#experience")}
                className={
                  activeNav === "#experience"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="uil uil-play-circle nav__icon"></i> Exp & skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact"
                    ? "nav__link active__link"
                    : "nav__link"
                }
              >
                <i className="uil uil-message nav__icon"></i> Contact
              </a>
            </li>
          </ul>

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
