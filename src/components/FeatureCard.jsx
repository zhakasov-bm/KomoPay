import React, { useState, useEffect } from "react";
import cards from "../data/cards";

function FeatureCard({ icon, title }) {
  return (
    <div className="feature-card">
      <img className="feature-icon" src={icon} alt="icon" />
      <p className="feature-text">{title}</p>
    </div>
  );
}

function FeatureList() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="features-container">
      <div className={`features-wrapper ${isMobile ? "scroll-animation" : ""}`}>
        {isMobile
          ? [...cards, ...cards].map((card, index) => (
              <FeatureCard key={index} icon={card.imgURL} title={card.title} />
            ))
          : cards.slice(0, 4).map((card) => (
              <FeatureCard key={card.id} icon={card.imgURL} title={card.title} />
            ))}
      </div>
    </div>
  );
}

export default FeatureList; // Export FeatureList (NOT FeatureCard)