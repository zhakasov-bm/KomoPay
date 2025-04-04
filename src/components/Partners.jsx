import React from "react";
import Marquee from "react-fast-marquee";

const partnersLogos = [
  "/partners/yandex.svg",
  "/partners/rbk.svg",
  "/partners/jusan.svg",
  "/partners/simply.svg",
  "/partners/turing.svg",
  "/partners/bope.svg",
  "/partners/parking.svg",
];

function Partners() {
  return (
    <section id="partners">
      <h2>Наши партнеры</h2>

      {/* Mobile auto-scroll */}
      <div className="mobile-only">
        <Marquee speed={70} gradient={false} pauseOnHover={false}> {/* Disable pause on hover */}
          {partnersLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Partner ${index + 1}`}
              className="partner-logo-mobile"
            />
          ))}
        </Marquee>
      </div>

      {/* Desktop grid */}
      <div className="partners-logo desktop-only">
        {partnersLogos.map((logo, index) => (
          <img key={index} src={logo} alt={`Partner ${index + 1}`} />
        ))}
      </div>
    </section>
  );
}

export default Partners;
