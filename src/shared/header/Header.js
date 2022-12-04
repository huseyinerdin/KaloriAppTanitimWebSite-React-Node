import React from "react";

const Header = () => {
  return (
    <header>
      <img src="img/logo/MainLogo.png" alt="RUFIT Logo" />
      <div className="nav-bar">
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
    </header>
  );
};

export default Header;
