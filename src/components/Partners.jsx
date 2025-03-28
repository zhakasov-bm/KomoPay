import React from "react";

const partnersLogos = [
    "/partners/air-peace.svg",
    "/partners/filmHouse.svg",
    "/partners/piggyvest.svg",
    "/partners/air-peace.svg",
    "/partners/air-peace.svg",
    "/partners/air-peace.svg",
    "/partners/air-peace.svg",
    "/partners/air-peace.svg",
    "/partners/air-peace.svg",
    "/partners/air-peace.svg",
    "/partners/air-peace.svg",
    "/partners/air-peace.svg",
    "/partners/air-peace.svg",
    "/partners/air-peace.svg",
    "/partners/air-peace.svg",
    "/partners/air-peace.svg",
    "/partners/filmHouse.svg",
    "/partners/piggyvest.svg"
];

function Partners() {
    return (
        <section id="partners">
            <h2>Наши партнеры</h2>
            <div className="partners-slider">
                <div className="partners-logo">
                    {partnersLogos.map((logo, index) => (
                        <img key={index} src={logo} alt={`Partner ${index + 1}`} />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Partners;