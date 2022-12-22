import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {FaFacebookMessenger} from 'react-icons/fa'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0s1qcym', 'template_8nov205', form.current, 'Fk0HTe1EFaF2rg_7v')
    .then((result) => {
      console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

    e.target.reset()

  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <HiOutlineMail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>russkobelsky@gmail.com</h5>
            <a href="mailto:russkobelsky@gmail.com" target="_blank">Send me an email</a>
          </article>

          <article className='contact__option'>
            <FaFacebookMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Russell Kobelsky</h5>
            <a href="https://m.me/russell.kobelsky.54/" target="_blank">Send me a message</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+12489467791</h5>
            <a href="https://api.whatsapp.com/send?phone=12489467791" target="_blank">Send me a text</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
      
    </section>
  )
}

export default Contact