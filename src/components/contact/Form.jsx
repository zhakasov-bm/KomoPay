import React, { useState } from "react";

function Form() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_i9ad4tx",   // Your EmailJS service ID
            "template_eudzbtu",  // Your EmailJS template ID
            e.target, 
            "UIL_CeMVzw9G75tLc"  // Your EmailJS public key
        )
        .then(() => {
            alert("Форма успешно отправлена!");
            setFormData({ name: "", phone: "", email: "" }); // Reset form
        })
        .catch(() => {
            alert("Ошибка при отправке формы. Попробуйте снова.");
        });
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <InputField 
                type="text" 
                name="name" 
                placeholder="Ваше имя" 
                value={formData.name} 
                onChange={handleChange} 
            />
            <InputField 
                type="tel" 
                name="phone" 
                placeholder="Номер телефона" 
                pattern="^\+?[0-9\s\-\(\)]{7,15}$" 
                value={formData.phone} 
                onChange={handleChange} 
            />
            <InputField 
                type="email" 
                name="email" 
                placeholder="Ваш e-mail" 
                value={formData.email} 
                onChange={handleChange} 
            />
            <button className="home-btn" type="submit">Отправить</button>
        </form>
    );
}

// Reusable Input Field Component
function InputField({ type, name, placeholder, value, onChange, pattern }) {
    return (
        <input 
            type={type} 
            name={name} 
            className="input" 
            placeholder={placeholder} 
            value={value} 
            onChange={onChange} 
            pattern={pattern} 
            required 
        />
    );
}

export default Form;