import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Analytics from './Components/Analytics';
import NewsLetter from './Components/NewsLetter';
import Card from './Components/Card';
import Footer from './Components/Footer';

function App() {
  return (
    <>
    <div>
      <Navbar />
      <Hero />
      <Analytics />
      <NewsLetter />
      <Card />
      <Footer />
    </div>
    </>
  );
}

export default App;
