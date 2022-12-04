import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="hizli-erisim">
        <span>
          Hızlı Erişim
          <hr />
        </span>
        <ul>
          <li>
            <a href="/">Ana Sayfa</a>
          </li>
          <li>
            <a href="/yemekler">Yemekler</a>
          </li>
          <li>
            <a
              href=" "
              onClick={(event) => {
                event.preventDefault();
                fetch("http://localhost:5000/kayitol");
              }}
            >
              Kayıt Ol
            </a>
          </li>
        </ul>
      </div>
      <div className="social-media">
        <a href="https://github.com/furkansahin16/CalorieApp">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/hüseyin-erdin-76a5281a1">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
