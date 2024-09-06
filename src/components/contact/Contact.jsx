import React from 'react'
import '../contact/Contact.scss'
import { motion,} from 'framer-motion'

const variants={
    initial:{
        y:500,
        opacity:0,
    },
    animate:{
        y:0,
        opacity:1,
        transition:{
            duration:0.5,
            staggerChildren:0.1
        }
    }
}



const Contact = () => {
    
  return (
    <motion.div className='contact' variants={variants} initial="initial" whileInView="animate">
        <motion.div className="contactTextContainer" variants={variants}>
            <motion.h1 variants={variants}>Let's work together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>keerthanadurai05@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>Palani-Tamil Nadu</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Github</h2>
                <a href="https://github.com/KEERTHANADURAISAM">KEERTHANADURAISAM</a>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <form>
                <input type="text" required placeholder='Name' />
                <input type="Eext" required placeholder='Email' />
                <textarea rows={8} placeholder='Message'></textarea>
           <button>Submit</button>
            </form>
        </div>
    </motion.div>

    
  )
}

export default Contact