import React, { useState } from 'react';
import Links from './links/Links';
import ToggleButton from './togglebutton/ToggleButton';
import { motion } from 'framer-motion';
import './Sidebar.scss';

const Sidebar = () => {
  const [open, setOpen] = useState(false);  // Corrected the state variable name

  const variants = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {  // Corrected 'transtion' to 'transition'
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {  // Fixed the typo 'close' to 'closed'
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
      },
    },
  };

  return (
    <motion.div
      className="sidebar"
      variants={variants}  // Added the 'variants' prop
      animate={open ? "open" : "closed"}  // Corrected 'open' state to match the state variable
    >
      <div className="bg">
        <Links />
      </div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
