import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Values from './components/Values';
import Features from './components/Features';
import Banner from './components/Banner';
import FAQSection from './components/FAQ/FAQSection';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Values />
      <Features />
      <Banner />
      <FAQSection />
      <Footer />
    </div>
  );
}

export default App;