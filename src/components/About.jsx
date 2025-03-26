import React from "react";

function About() {
    return (
        <section id="about">
            <div className="about-header">
                <h2>О компании</h2>
                <p>Komo Pay — это современная платежная платформа, разработанная для удобной
                    и безопасной обработки транзакций. Мы помогаем бизнесу принимать платежи,
                    автоматизировать процессы и обеспечивать надежные финансовые операции.
                </p>
            </div>
            <div className="about-cards">
                <img src="src/assets/about-1.svg" alt="" />
                <img src="src/assets/about-2.svg" alt="" />
                <img src="src/assets/about-3.svg" alt="" />
            </div>
        </section>
    )
}

export default About;