import './app.scss'
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Home from './components/home/Home';
import Navbar from './components/navbar/navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';
import Sidebar from './components/sidebar/Sidebar';
import Test from './test';

const App = () => {
  return <div>
    <section id='Homepage'>
      <Navbar/>
     <Home/>
    </section>
    <section id='Services'><Parallax type="services"/></section>
    <section><About/></section>
    <section id='Portfolio'><Parallax type="portfolio"/></section>
    {/* <section><Portfolio/></section> */}
    <section>Portfolio2</section>
    <section>Portfolio3</section>
    <section id='Contact'><Contact/></section>
    {/* <Test/> */}
  </div>;
};

export default App;
