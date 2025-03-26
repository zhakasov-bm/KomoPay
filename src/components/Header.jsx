import React, { useState } from "react";
import { scrollToSection } from "../scrollToSection";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      {/* Logo */}
      <div className="logo">
        <img src="./logo.svg" alt="KomoPay Logo" className="logo-img" />
      </div>

      {/* Бургер-кнопка (только на мобилке) */}
      <button className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Навигация + кнопка */}
      <div className={`nav-container ${isOpen ? "open" : ""}`}>
        <nav className="nav">
          <a href="#about">О компании</a>
          <a href="#service">Сервисы</a>
          <a href="#partners">Партнеры</a>
          <a href="#advantages">Преимущества</a>
        </nav>

        <button className="contact-btn" onClick={() => scrollToSection("contact")}>Связаться</button>
      </div>
    </header>
  );
};

export default Header;
