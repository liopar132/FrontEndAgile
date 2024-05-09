import React from "react";
import Warepic from "../Assets/220406-how-to-keep-your-warehouse-organized.webp"
import "../styles/Contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="leftSide" style={{ backgroundImage: `url(${Warepic})` }}></div>
      <div className="rightSide">
        <h1> Contact Us</h1>

        <form id="contact-form" method="POST">
          <label htmlFor="name">Nom complet</label>
          <input name="name" placeholder="Entrer votre nom complet" type="text" />
          <label htmlFor="email">Email</label>
          <input name="email" placeholder="Entrer votre email" type="email" />
          <label htmlFor="message">Message</label>
          <textarea
            rows="6"
            placeholder="Entrer votre message"
            name="message"
            required
          ></textarea>
          <button type="submit"> Envoyer votre message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;