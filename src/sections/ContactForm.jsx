import React, { useRef, useState } from "react";
import { contactFull, socialMedia } from "../constants";
import emailjs from '@emailjs/browser';

export const ContactForm = () => {
  const form = useRef();
  
  const [nameFocused, setNameFocused] = useState(false);
  const [contactFocused, setContactFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);
  const [formData, setFormData] = useState({ username: "", contact: "", message: "" });

  const handlechange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_f64v9m7' , "template_0zary9x", form.current, 'gq3RhAUptftUsb2Uv')
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          alert("Votre message a été envoyé!");
          // Reset the form fields after successful submission
          setFormData({ username: "", contact: "", message: "" });
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          alert("Votre message a été envoyé!");
        }
      );
  };

  return (
    <section className="bg-light-green-bg lg:section-spacing">
      <section className="relative max-container padding flex flex-col-reverse gap-12 padding-x">
        <form action="post" ref={form} onSubmit={handleSubmit} className="lg:right-0 shadow-2xl bg-primary py-24 lg:py-44 lg:w-1/2 padding-x lg:absolute top-1/2 lg:-translate-y-1/2">
          <div className="relative mb-8">
            <label htmlFor="name" className={`absolute top-0 text-white text-xl ${nameFocused || formData.username ? '-translate-y-[20px] !text-sm' : ''}`}>nom et prénom...</label>
            <input
              type="text"
              id="name"
              name="username"
              onFocus={() => setNameFocused(true)}
              onBlur={() => setNameFocused(false)}
              value={formData.username}
              onChange={handlechange}
              className="border-b-2 py-1 mb-5 w-full border-white bg-transparent outline-none text-white font-medium"
            />
          </div>
          <div className="relative mb-8">
            <label htmlFor="contact" className={`absolute top-0 text-white text-xl ${contactFocused || formData.contact ? '-translate-y-[20px] !text-sm' : ''}`}>email ou téléphone...</label>
            <input
              type="text"
              id="contact"
              name="contact"
              onFocus={() => setContactFocused(true)}
              onBlur={() => setContactFocused(false)}
              value={formData.contact}
              onChange={handlechange}
              className="border-b-2 py-1 mb-5 w-full border-white bg-transparent outline-none text-white font-medium"
            />
          </div>
          <div className="relative mb-8">
            <label htmlFor="message" className={`absolute top-0 text-white text-xl ${messageFocused || formData.message ? '-translate-y-[20px] !text-sm' : ''}`}>Votre message...</label>
            <textarea
              id="message"
              name="message"
              onFocus={() => setMessageFocused(true)}
              onBlur={() => setMessageFocused(false)}
              value={formData.message}
              onChange={handlechange}
              className="border-b-2 py-1 mb-5 w-full border-white bg-transparent outline-none text-white font-medium"
            />
          </div>
          <button className="w-full py-6 bg-[#181818] text-white text-xl font-semibold" type="submit">Send</button>
        </form>
        <div className="padding">
          <h1 className="relative text-3xl w-fit before:h-2 before:w-full before:absolute before:-bottom-0 before:bg-gradient-to-r before:from-green-secondary before:to-shiny-green text-dark-text lg:text-5xl lg:before:-bottom-2">
            Contactez nous.
          </h1>
          <div className="flex flex-col py-12 gap-4 lg:gap-8 lg:padding">
            {contactFull.map((contact) => (
              <div
                className="flex gap-2 text-md font-normal text-gray-text md:text-lg"
                key={contact.label}
              >
                <img src={contact.icon} width={20} height={20} alt="phone" />
                <p>{contact.label}</p>
              </div>
            ))}
          </div>
          <div className="flex lg:gap-6 gap-2 ">
            {socialMedia.map((platform) => (
              <a href={platform.href}><img src={platform.icon} width={60} height={60} className="hover:-translate-y-[6px]" alt="" srcset="" /></a>
            ))}
          </div>
        </div>
      </section>
    </section>
  );
};
