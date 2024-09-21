import React from 'react'
import '../home/Home.scss'
import home from '../navbar/img/14284d_2cb43613a8c74caf8e18755236501525~mv2.gif'
import scroll from '../home/scroll.png'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'



const textVariants={
  initial:{
    x:-500,
    opacity:0,
  },
  animate:{
    x:0,
    opacity:1,
    transition:{
      duration:1,
      staggerChildren:0.1,
    }
  },
  scrollButton:{
    opacity:0,
    y:15,
    transition:{
      duration:1,
      repeat:Infinity,
     

  }
  }
}


const sliderVariants={
  initial:{
    x:0,
  },
  animate:{
    x:"250%",
  
    transition:{
      duration:20,
      repeat:Infinity,
       repeatType:"mirror"
    }
  },
 
}





const Home = () => {
  return (
    <div className="hero">
      <div className="wrapper-home">
     <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
      <motion.h2 variants={textVariants}>Keerthana Duraisamy</motion.h2>
      <motion.h1 variants={textVariants}>Mern Stack Developer</motion.h1>
      <motion.div className="home-btns">
              <motion.button variants={textVariants}>See the Latest Works</motion.button>
              <motion.button variants={textVariants}>Contact Me</motion.button>
      </motion.div>
      <motion.img variants={textVariants} animate="scrollButton" src={scroll} alt='scroll' className='scroll-img'/>
     </motion.div>
     </div>
     <motion.div className="slidingTextContainer" variants={sliderVariants} initial="initial" animate="animate">
     {/* !false, it‘s funny because it‘s true */}
     Developer
     </motion.div>
        <div className="imageContainer">
            <img src={home} alt='my-image' className='home-image'/>
        </div>
    </div>
  )
}

export default Home