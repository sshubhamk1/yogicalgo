
import './App.css';
import Navbar from './Wedding/Navbar';
import Carouseal from './Wedding/Carouseal';
import AboutModel from './Wedding/AboutModal';
import Story from './Wedding/Story';
import Event from './Wedding/Event';
import RsVp from './Wedding/RsVp';
import Contact from './Wedding/Contact';
import Gallery from './Wedding/Gallery';
import { useEffect, useState } from 'react';
import "./scss/style.scss"
function App() {
  const [showButton ,setShowButton] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
     const showThreshold = 100; 
      setShowButton(scrollY > showThreshold);
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="App">
      <Navbar />
      <Carouseal />
      <AboutModel />
      <Gallery/>
      <Story />
      <Event />
      <RsVp />
  
      <button className="btn btn-lg btn-outline-primary btn-lg-square back-to-top" onClick={scrollToTop}><i className="fa fa-angle-double-up double"></i></button>
      <Contact />
    </div>
  );
}

export default App;
