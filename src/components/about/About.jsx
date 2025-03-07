import React from 'react';
import "../about/About.scss";
import { motion } from "framer-motion";
import html from './file.png';
import css from './css (2).png';
import boot from './letter-b (1).png';
import js from './javascript.png';
import react from './react.png';
import post from './parking-area.png';
import mongodb from './database (1).png';
import node from './letter-n.png';
import express from './leaf.png';
import git from './branch.png';
import skill from'./14284d_2cb43613a8c74caf8e18755236501525~mv2.gif';
import github from './letter-g (1).png';
import netlifY from './letter-n.png';

const variants = {
    hidden: { opacity: 0, x: -100 },
    show: { opacity: 1, x: 0, transition: { duration: 1, staggerChildren: 0.2 } }
};

const About = ({ pageRefs }) => {
    return (
        <div className='skill-container'>
            <div className='skill-grid'>
               <motion.div variants={variants}
                    initial="hidden"
                    animate="show">
               <div className="about-content">
          <h1>About Me</h1>
        </div>
        <div className="about-text">
          <h3>
            Hi, I'm a Qualified Full Stack Developer familiar with a wide
            range of programming utilities and languages. Knowledgeable of
            backend and frontend development requirements with database
            management. Handles any part of the process with ease. Collaborative
            team player with a willingness to learn in and grow with the
            organization.
          </h3>
        </div>
               </motion.div>
                <motion.div
                    variants={variants}
                    initial="hidden"
                    animate="show"
                    className='tech-icon-card'
                > 
                    {[{img: html, name: 'HTML'}, {img: css, name: 'CSS'}, {img: boot, name: 'BOOTSTRAP'}, {img: js, name: 'JAVASCRIPT'}, {img: react, name: 'REACT'}, {img: mongodb, name: 'MONGO DB'}, {img: node, name: 'NODE'}, {img: express, name: 'EXPRESS'}, {img: github, name: 'GITHUB'}, {img: git, name: 'GIT'}, {img: netlifY, name: 'NETLIFY'}, {img: post, name: 'POSTMAN'}].map((tech, index) => (
                        <div className='tech-icon-div' key={index}>
                            <img src={tech.img} className='tech-icon' alt={tech.name}/>
                            <span className='tech-span'>{tech.name}</span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default About;