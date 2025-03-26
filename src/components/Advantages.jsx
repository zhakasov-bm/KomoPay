import React, { useState, useEffect } from "react";
import advantages from "../data/advantages";

function Advantages() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handleResize = (e) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", handleResize);

        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    return (
        <section id="advantages">
            <div className="left">
                <h2>
                    {isMobile ? "Почему выбирают нас" : <>Почему выбирают <span className="highlight">Komo Pay?</span></>}
                </h2>
                <p>
                    Мы создаем быстрые, надежные и безопасные платежные решения, которые помогают бизнесу масштабироваться
                    и работать эффективнее.
                </p>
                <img src="./adv.png" alt="Преимущества Komo Pay" />
            </div>
            <div className="right">
                {advantages.map((adv, index) => (
                    <div className="item" key={index}>
                        <img className="icon" src={adv.icon} alt={adv.title} />
                        <div className="text">
                            <h1>{adv.title}</h1>
                            <p>{adv.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Advantages;