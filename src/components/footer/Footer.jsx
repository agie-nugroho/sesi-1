import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <h1 className="footer__title">Agie</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#experience" className="footer__link">
              Exp & Skills
            </a>
          </li>

          <li>
            <a href="#contact" className="footer__link">
              Contact
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a
            href="https://www.instagram.com/agienugroho/?hl=id"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-instagram"></i>
          </a>

          <a
            href="https://www.facebook.com/agi.nugroho.3/"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-facebook"></i>
          </a>

          <a
            href="https://api.whatsapp.com/send/?phone=6287838013523&text&type=phone_number&app_absent=0"
            className="footer__social-link"
            target="_blank"
          >
            <i class="bx bxl-whatsapp"></i>
          </a>
        </div>

        <span className="footer__copy"> &#169; AgieNugroho. All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;
