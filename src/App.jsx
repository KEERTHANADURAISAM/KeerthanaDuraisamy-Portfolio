import "./app.scss";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import PositionCursor from "./components/cursor/PositionCursor";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";



const App = () => {
  return (
    <div>
      <PositionCursor />
      <section id="Homepage">
        <Navbar />
        <Home />
      </section>
     
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <About />
      </section>
       <section id="Portfolio">
        <Parallax type="portfolio" />
      </section>  
      <Portfolio/> 

      <section id="Contact">
        <Contact />
      </section>   
    </div>
  );
};

export default App;
