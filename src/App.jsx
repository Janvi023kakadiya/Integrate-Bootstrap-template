import React, { useRef, useState } from 'react';
import { Container } from 'react-bootstrap';
import Navbar from './assets/components/Navbar';
import Header from './assets/components/Header';
import CartMessage from './assets/components/CartMessage';
import FeaturedWines from './assets/components/FeaturedWines';
import AboutSection from './assets/components/AboutSection';
import WineList from './assets/components/WineList';
import Footer from './assets/components/Footer';

function App() {
  const wineListRef = useRef(null);
  const [cartMessage, setCartMessage] = useState('');
  const [cartCount, setCartCount] = useState(0);

  const scrollToWineList = () => {
    wineListRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  const addToCart = (wineName) => {
    setCartMessage(`"${wineName}" added to cart!`);
    setCartCount(cartCount + 1);
    setTimeout(() => setCartMessage(''), 3000);
  };

  return (
    <div>
      <Navbar cartCount={cartCount} />
      <Header scrollToWineList={scrollToWineList} />
      {cartMessage && <CartMessage message={cartMessage} />}
      <Container>
        <FeaturedWines />
        <AboutSection />
        <WineList ref={wineListRef} addToCart={addToCart} />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
