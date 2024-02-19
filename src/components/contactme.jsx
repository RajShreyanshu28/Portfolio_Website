import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contactme.css'

const Contactme = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id='contact'>
        <div className='naming'>CONTACT ME</div>
        
        <form className='forms' ref={form} onSubmit={sendEmail}>
            <input className='names' type="text" placeholder='Your Name'/>
            <input className = 'emails' type="email" placeholder='Your Email' />
            <textarea className = 'msg' name='message' rows={5} placeholder='Your Message'/>
            <button className = 'sbmit' type='submit' value={'send'}>Send</button>
        </form>
    </section> 
  )
}

export default Contactme