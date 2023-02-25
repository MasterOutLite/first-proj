import React, { useState } from "react";
import "../styles/HeaderSite.css";

const HeaderSite = () => {
  const [second, first] = useState(0);

  return (
    <header className="header">
      <div className="container">
        <div className="header__container">
          <span className="header__title">Animon</span>
          <nav className="nav">
            <a href="#" className="nav__link">
              Home
            </a>
            <a href="#" className="nav__link">
              Shop
            </a>
            <a href="#" className="nav__link">
              Contacts us
            </a>
            <a href="#" className="nav__link">
              About
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default HeaderSite;
