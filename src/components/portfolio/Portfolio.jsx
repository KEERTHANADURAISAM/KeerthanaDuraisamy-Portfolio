import React, { useRef } from 'react';
import '../portfolio/Portfolio.scss';
import { useScroll, useSpring, motion, useTransform } from 'framer-motion';

const items = [
  {
    id: 1,
    title: 'React Commerce',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4T5IOYFZ4rcfhRSphYuqtQhkb3izRHKuEA&s',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex obcaecati voluptatibus nemo natus nobis cupiditate vitae non sapiente error. Neque reprehenderit ea inventore alias ex repellendus minima corrupti provident.',
  },
  {
    id: 2,
    title: 'Vanilla Commerce',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4T5IOYFZ4rcfhRSphYuqtQhkb3izRHKuEA&s',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex obcaecati voluptatibus nemo natus nobis cupiditate vitae non sapiente error. Neque reprehenderit ea inventore alias ex repellendus minima corrupti provident.',
  },
  {
    id: 3,
    title: 'MERN Commerce',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4T5IOYFZ4rcfhRSphYuqtQhkb3izRHKuEA&s',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex obcaecati voluptatibus nemo natus nobis cupiditate vitae non sapiente error. Neque reprehenderit ea inventore alias ex repellendus minima corrupti provident.',
  },
  {
    id: 4,
    title: 'Next.js Commerce',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQl4T5IOYFZ4rcfhRSphYuqtQhkb3izRHKuEA&s',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae ex obcaecati voluptatibus nemo natus nobis cupiditate vitae non sapiente error. Neque reprehenderit ea inventore alias ex repellendus minima corrupti provident.',
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset:["start start","end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section ref={ref}>
      <div className="containeritem">
        <div className="wrapperItem">
            <div className="imageContainer">
          <img src={item.img} alt="" />
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

const Portfolio = () => {
  const ref = useRef();

  // Initialize scrollYProgress and scaleX in the Portfolio component
  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div className="progressbar" style={{ scaleX }}></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
