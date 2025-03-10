import React, { useRef } from 'react';
import '../portfolio/Portfolio.scss';
import { useScroll, useSpring, motion, useTransform } from 'framer-motion';
import img1 from '../portfolio/online-shop.png'
import img2 from '../portfolio/financial-planning.png'
import img3 from '../portfolio/chat.png'
import img4 from '../portfolio/solved.png'


// Sample data for items
const items = [
  { id: 1, title: 'MERN Commerce', img:img1, desc: 'Explore the store and shop with ease! ',link:'https://ecommerece-app-cnk6.vercel.app/' },
  { id: 2, title: 'Money Manager', img:img2, desc: 'Manage your money effortlessly and take charge of your finances!',link:'https://money-manager-app-client.vercel.app/' },
  { id: 3, title: 'Social Media App', img: img3, desc: 'Stay connected with friends, discover new content, and engage in meaningful conversations!',link:'https://social-media-app-client-eta.vercel.app/auth' },
  { id: 4, title: 'Zen Portal', img:img4, desc: 'Bridge the gap between students and teachers with instant query resolution!',link:'https://elegant-beijinho-0a563b.netlify.app/' },
];


// Component for individual items with scroll animations
const Single = ({ item }) => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start","end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 200]);


  return (
    <section>
      <div className="containeritem" >
        <div className="wrapperItem">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt={item.title} />
          </div>
          <motion.div className="textContainerItem" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            {item.link ? (
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <button>See Demo</button>
              </a>
            ) : (
              <button disabled style={{ opacity: 0.5, cursor: "not-allowed" }}>
                Demo Not Available
              </button>
            )}
            
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Portfolio component with center progress bar
const Portfolio = () => {
  const ref = useRef();

  // Full-page scroll progress for progress bar animation
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"], // Track the entire portfolio section
  });

  // Progress bar scale animation based on scroll position
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio">
      {/* Progress bar that fills as the page scrolls */}
      <div className="progress"  ref={ref}>
        <h1>Featured Works</h1>
       
        <motion.div className="progressbar" style={{ scaleX }} />
        </div>

      {/* Rendering each item in the portfolio */}
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
