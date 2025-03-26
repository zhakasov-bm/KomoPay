import React from "react";
import ServiceCard from "./ServiceCard.jsx";
import services from "../data/services";
import { scrollToSection } from "../scrollToSection";

function Services() {
  return (
    <section id="service">
      <div className="card-title">
        <h2>Наши сервисы</h2>
        <span>Быстро, безопасно и удобно — всё, что нужно для приема и отправки платежей</span>
      </div>
      <div className="card-container">
        {services.map((card) => (
          <ServiceCard
            key={card.id}
            title={card.title}
            description={card.description}
            imgURL={card.imgURL}
          />
        ))}
      </div>
      <button className="home-btn" onClick={() => scrollToSection("contact")}>Оставить заявку</button>
    </section>
  );
}

export default Services;
