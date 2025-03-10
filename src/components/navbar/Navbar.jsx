import React from "react";
import github from "../navbar/img/branch.png";
import gmail from "../navbar/img/gmail.png";
import link from "../navbar/img/linkedin.png";
import cv from "../navbar/img/cv.png";
import "../navbar/Navbar.scss";
import { motion } from "framer-motion";
import logo from '../navbar/img/logo-removebg-preview.png'
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {
  return (
    <div className="navbar">
     
        {/* <Sidebar />
         */}
        <div className="wrapper">
        <motion.img
          src={logo} // Replace with your image URL or path
  alt="Animated Image"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          
        </motion.img>
        <div className="social">
          <a href="https://github.com/KEERTHANADURAISAM" target="_blank">
            <img src={github} alt="Github" />
          </a>
          <a href="#">
            <img src={gmail} alt="Gmail" />
          </a>
          <a
            href="https://www.linkedin.com/in/keerthana-durai-b67a40253/"
            target="_blank"
          >
            <img src={link} alt="LinkedIn" />
          </a>
          <a
            href="https://drive.google.com/file/d/1RK4OIZ8R1hF8N1HwYN74qkwGUDRy0rWZ/view?usp=sharing"
            target="_blank"
          >
            <img src={cv} alt="CV" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
