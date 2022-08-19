import Hero from './components/Hero/Hero';
import './App.css';
import Navbar from './components/Navbar';
import Bubble from './components/Bubble';

function App() {
  return (
    <div className="App">
    <Navbar />
      <Hero />
      <Bubble />
    </div>
  );
}

export default App;
