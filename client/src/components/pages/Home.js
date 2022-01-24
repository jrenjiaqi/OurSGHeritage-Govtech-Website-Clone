import React, { useEffect } from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Chat from '../Chat';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <HeroSection />
      <Cards />
      <Chat />
    </>
  );
}

export default Home;
