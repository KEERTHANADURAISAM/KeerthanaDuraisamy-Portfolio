import React from 'react'
import "../about/About.scss"
import { animate, motion,useInView } from 'framer-motion'
import { useRef } from 'react'


const variants={
    initial:{
        x:-500,
        y:100,
        opacity:0,
    },
    animate:{
        x:0,
        opacity:1,
        y:0,
        transition:{
            duration:1,
            staggerChildren:0.1,
        }
    }
}




const About = () => {

const ref =useRef()
const isInView = useInView(ref,{margin:"-100px"})


  return (
    <motion.div className='about' variants={variants} initial="initial" 
    ref={ref}
animate={isInView && "animate"}
    // animate="animate"
    // whileInView="animate"
    >
        <motion.div className="textContainerAbout"  variants={variants} initial="initial" animate="animate">
            <p>I focus on helping brand<br/> and move forward </p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainerAbout">
            <div className="title">
                <img src='/people.webp' alt=''/>
                <h1>
                    <motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas
                </h1>
            </div>
            <div className="title">
               <h1>
                    <motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business
                </h1>
                <button>WHAT WE DO?</button>
            </div>
        </motion.div>
        <motion.div className="listContainerAbout">
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex obcaecati voluptatibus nemo natus nobis cupiditate vitae non sapiente error. Neque reprehenderit ea inventore alias ex repellendus minima corrupti provident.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex obcaecati voluptatibus nemo natus nobis cupiditate vitae non sapiente error. Neque reprehenderit ea inventore alias ex repellendus minima corrupti provident.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex obcaecati voluptatibus nemo natus nobis cupiditate vitae non sapiente error. Neque reprehenderit ea inventore alias ex repellendus minima corrupti provident.</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"lightgray",color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex obcaecati voluptatibus nemo natus nobis cupiditate vitae non sapiente error. Neque reprehenderit ea inventore alias ex repellendus minima corrupti provident.</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default About









