import React from "react";
import { scrollToSection } from "../scrollToSection";


const Home = () => {
  return (
    <section id="home">
      {/* Left side (Text) */}
      <div className="home-text">
        <h1>Быстрые и надежные платежные технологии</h1>
        <p>
          Оптимизированные платежные процессы, высокая производительность,
          безупречная поддержка
        </p>
        <img className="mob-image" src="./mob.png" alt="" />
        <button className="home-btn" onClick={() => scrollToSection("about")}>Узнать больше</button>
      </div>

      {/* Right side (Image) */}
      <div className="home-image">
        <img src="./hero-img.png" alt="Payment Technology" />
      </div>
    </section>
  );
};

export default Home;
