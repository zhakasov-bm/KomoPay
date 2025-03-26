import React from "react";
import "/Users/bekzhan/Desktop/web/komo-pay/src/Footer.css";
import { scrollToSection } from "../scrollToSection";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="logo">
            <img src="./logo-wh.svg" alt="KomoPay Logo" className="logo-img" />
        </div>
        
        <div className="footer-links">
          <h4 onClick={() => scrollToSection("home")}>Главная</h4>
          <ul>
            <li onClick={() => scrollToSection("about")}>О компании</li>
            <li onClick={() => scrollToSection("service")}>Сервисы</li>
            <li onClick={() => scrollToSection("partners")}>Партнеры</li>
            <li onClick={() => scrollToSection("advantages")}>Преимущества</li>
            <li onClick={() => scrollToSection("contact")}>Контакты</li>
          </ul>
        </div>
        
        <div className="footer-contacts">
          <h4>Контакты</h4>
          <p>info@komopay.kz</p>
          <p><span>Лицензия</span> KZ36VWC00240216</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>Copyright © KomoPay 2025. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
