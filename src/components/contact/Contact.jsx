import React, { useRef, useState } from 'react';
import '../contact/Contact.scss';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import msg from '../contact/paper-plane.gif'



const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const Contact = () => {
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const ref = useRef();
  const formref = useRef();
  const isInView = useInView(ref, { rootMargin: '0px 0px -10px 0px' });

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_ge6rmtt', 'template_v0yfjjc', formref.current, {
        publicKey: 'da640-A6BC8T790z-',
      })
      .then(
        (result) => {
          setSuccess(true);
        },
        (error) => {
          setError(true);
        }
      );
  };

  return (
    <motion.div
      ref={formref}
      className="contact"
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ rootMargin: '0px' }}
    >
      <motion.div className="contactTextContainer" variants={variants}>
        <motion.h1 variants={variants}>Let's work together</motion.h1>
        <motion.div className="item" variants={variants}>
          <h2>Mail</h2>
          <span>keerthanadurai05@gmail.com</span>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>LinkedIn</h2>
          <a href="https://www.linkedin.com/in/keerthana-durai-b67a40253/">
            KEERTHANADURAISAMY
          </a>
        </motion.div>
        <motion.div className="item" variants={variants}>
          <h2>Github</h2>
          <a href="https://github.com/KEERTHANADURAISAM">KEERTHANADURAISAM</a>
        </motion.div>
      </motion.div>
      <div className="formContainer">
        
        <motion.form
          ref={formref}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message"></textarea>
          <button type="submit">Submit</button>
          {error && 'Error'}
          {success && 'Success'}
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
