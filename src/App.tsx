import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Trainers from './components/Trainers';
import Pricing from './components/Pricing';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <Programs />
      <Trainers />
      <Pricing />
      <Contact />
    </div>
  );
}

export default App;
