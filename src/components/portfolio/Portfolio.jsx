import React, { useRef } from 'react';
import '../portfolio/Portfolio.scss';
import { useScroll, useSpring, motion, useTransform } from 'framer-motion';

// Sample data for items
const items = [
  { id: 1, title: 'React Commerce', img: 'your-image-url', desc: 'Sample description' },
  { id: 2, title: 'Vanilla Commerce', img: 'your-image-url', desc: 'Sample description' },
  { id: 3, title: 'MERN Commerce', img: 'your-image-url', desc: 'Sample description' },
  { id: 4, title: 'Next.js Commerce', img: 'your-image-url', desc: 'Sample description' },
];


// Component for individual items with scroll animations
const Single = ({ item }) => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    // offset:["start start","end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);


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
            <button>See Demo</button>
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
