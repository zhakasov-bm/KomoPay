import React from "react";

const partnersLogos = [
    "public/partners/air-peace.svg",
    "public/partners/filmHouse.svg",
    "public/partners/piggyvest.svg",
    "public/partners/air-peace.svg",
    "public/partners/air-peace.svg",
    "public/partners/air-peace.svg",
    "public/partners/air-peace.svg",
    "public/partners/air-peace.svg",
    "public/partners/air-peace.svg",
    "public/partners/air-peace.svg",
    "public/partners/air-peace.svg",
    "public/partners/air-peace.svg",
    "public/partners/air-peace.svg",
    "public/partners/air-peace.svg",
    "public/partners/air-peace.svg",
    "public/partners/air-peace.svg",
    "public/partners/filmHouse.svg",
    "public/partners/piggyvest.svg"
];

function Partners() {
    return(
        <section id="partners">
            <h2>Наши партнеры</h2>
            <div className="partners-logo">
                {partnersLogos.map((logo, index) => (
                    <img key={index} src={logo} alt={`Partner ${index + 1}`} />
                ))}
            </div>
        </section>
    )
}

export default Partners;