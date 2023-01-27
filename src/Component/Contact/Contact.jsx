import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import"./Contact.css"


const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    
      emailjs
      .sendForm(
        'service_93dv7rs', 
        'template_36qafcv', 
        form.current, 
        'xsZiA-ID-fNb7br_O'
        )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="container">
      <div className="contact-form">
      <h1 className='contacts'>Contact Us</h1>
      <form 
      ref={form} 
      onSubmit={sendEmail}
       className='contact-inputs'
       >
        <label>Name</label>
        <input
         type="text" 
         name="user_name"    
         placeholder="Name" 
      />
        <label>Email</label>
        <input
         type="email"
          name="user_email" 
          placeholder="Email"   
        />
        <label>Message</label>
        <textarea 
        name="message"
         cols="30"
          rows="10"
          placeholder="Message"
          />
        <input 
        type="submit"
         value="Send" 
       
         />
      </form>
      </div>
      </div>
    </>
  );
};

export default Contact;

