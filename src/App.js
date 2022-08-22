import Hero from './components/Hero/Hero';
import './App.css';
import Navbar from './components/Navbar';
import Bubble from './components/Bubble';
import Service from './components/Services/Service';
import WhyUs from './components/WhyUs';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Hero />
      <Service/>
      <WhyUs />
      <Bubble />

    </div>
  );
}

export default App;
