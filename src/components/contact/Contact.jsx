import React, { useRef, useState } from 'react';
import '../contact/Contact.scss';
import { motion, useInView } from 'framer-motion';
import emailjs from '@emailjs/browser';
import msg from '../contact/paper-plane.gif'
import toast, { Toaster } from "react-hot-toast";


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

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Your EmailJS service ID, template ID, and Public Key
    const serviceId = "service_08xamoh";
    const templateId = "template_dihgyrv";
    const publicKey = "Cy4bJnADDYybIP7QK";

    // Create a new object that contains dynamic template params
    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Portfolio Mail",
      message: message,
    };

    // Send the email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log("Email sent successfully!", response);
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error("Error sending email:", error);
      });
  };
  const notify = (name, email, message) => {
    if (name && message && email !== "") {
      toast.success("Message Send Successfully");
    }
  };

  const ref = useRef();
  const formref = useRef();
  const isInView = useInView(ref, { rootMargin: '0px 0px -10px 0px' });

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm('service_ge6rmtt', 'template_v0yfjjc', formref.current, {
  //       publicKey: 'da640-A6BC8T790z-',
  //     })
  //     .then(
  //       (result) => {
  //         setSuccess(true);
  //       },
  //       (error) => {
  //         setError(true);
  //       }
  //     );
  // };

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
          onSubmit={handleSubmit}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <input type="text" required placeholder="Name" name="name" />
          <input type="email" required placeholder="Email" name="email" />
          <textarea rows={8} placeholder="Message" name="message"></textarea>
          <button type="submit">Submit</button>
         <Toaster/>
        </motion.form>
      </div>
    </motion.div>
  );
};

export default Contact;
