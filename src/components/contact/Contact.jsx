import React, { useState, useEffect } from "react";
import Form from "./Form";

function Contact() {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");
        setIsMobile(mediaQuery.matches);

        const handleResize = (e) => setIsMobile(e.matches);
        mediaQuery.addEventListener("change", handleResize);

        return () => mediaQuery.removeEventListener("change", handleResize);
    }, []);

    return (
        <section id="contact">
            <div className="left">
                <h2>{isMobile ? "Контакты" : "Свяжитесь с нами"}</h2>
                <p>
                    Komo Pay — лицензированная платежная платформа, обеспечивающая быстрые, надежные и безопасные 
                    финансовые транзакции для бизнеса любого масштаба.
                </p>
                <div className="info">
                    <div className="item">
                        <img className="icon" src="./document.svg" alt="Документ" />
                        <div className="text">
                            <span>Лицензионный номер</span>
                            <h1>KZ36VWC00240216</h1>
                        </div>
                    </div>
                    <div className="item">
                        <img className="icon" src="./mail.svg" alt="Email" />
                        <div className="text">
                            <span>Почта</span>
                            <h1>info@komopay.kz</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right">
                <h2>Свяжитесь с нами</h2>
                <div className="form-container">
                    <Form />
                </div>
            </div>
        </section>
    );
}

export default Contact;