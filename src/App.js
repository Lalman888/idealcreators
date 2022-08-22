import Hero from './components/Hero/Hero';
import './App.css';
import Navbar from './components/Navbar';
import Bubble from './components/Bubble';
import Service from './components/Services/Service';
import WhyUs from './components/WhyUs';
import Tech from './components/Tech';
import Work from './components/Work';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Hero />
      <Service/>
      <WhyUs />
      <Tech/>
      <Work />
      <Contact />
      <Footer />
      <BackToTop />
      <Bubble />

    </div>
  );
}

export default App;
