import React from "react";

function Form() {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "5ad1bd5f-b606-4450-ae6e-0630ebca9a84");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        try {
            const res = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json"
                },
                body: json
            });

            const data = await res.json();

            if (data.success) {
                alert("Форма успешно отправлена!"); // Show success alert
                event.target.reset(); // Clear the form fields
            } else {
                alert("Ошибка отправки, попробуйте снова.");
            }
        } catch (error) {
            alert("Ошибка сети, попробуйте позже.");
        }
    };

    return (
        <form className="form" onSubmit={onSubmit}>
            <div className="input-box">
                <input type="text" className="field" name="name" placeholder="Ваше имя" required />
            </div>
            <div className="input-box">
                <input type="tel" className="field" name="phone" placeholder="Номер телефона" pattern="^\+?[0-9\s\-\(\)]{7,15}$" required />
            </div>
            <div className="input-box">
                <input type="email" className="field" name="email" placeholder="Ваш e-mail" required />
            </div>
            <button className="home-btn" type="submit">Отправить</button>
        </form>
    );
}

export default Form;