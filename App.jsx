import { Leaf, ArrowRight } from 'lucide-react';
import { Link, Navigate, Route, Routes } from 'react-router-dom';
import AboutUs from './AboutUs.jsx';
import CartItem from './CartItem.jsx';
import Navbar from './Navbar.jsx';
import ProductList from './ProductList.jsx';

function LandingPage() {
  return (
    <main className="landing">
      <div className="landing-shade" />
      <Navbar overlay />
      <section className="landing-content" aria-labelledby="landing-title">
        <div className="eyebrow light-eyebrow"><Leaf size={16} /> A little more green, every day</div>
        <p className="landing-kicker">Welcome to</p>
        <h1 id="landing-title">Paradise<br />Nursery</h1>
        <p className="landing-copy">Thoughtfully grown plants for slower mornings, brighter corners, and happier homes.</p>
        <Link className="button button-light" to="/plants">Get Started <ArrowRight size={17} /></Link>
      </section>
      <div className="landing-note"><span>01 / 03</span><span>Find your kind of green</span></div>
    </main>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/plants" element={<ProductList />} />
      <Route path="/about" element={<><Navbar /><AboutUs /></>} />
      <Route path="/cart" element={<CartItem />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
