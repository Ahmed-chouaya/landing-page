import './App.css';
import Billing from './components/Billing';
import Business from './components/Business';
import CardDeal from './components/CardDeal';
import Clients from './components/Clients';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Service from './components/Service';
import Stats from './components/Stats';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Stats />
      <Business />
      <Billing />
      <CardDeal />
      <Testimonials />
      <Clients />
      <Service />
      <Footer />
    </div>
  );
}

export default App;
