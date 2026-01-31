import Hero from './components/Home/Hero'
import Footer from './components/Home/Footer'
import ScoreBoard from './components/Home/ScoreBoard'
import Result from './components/Home/Result'
import { useEffect, useState } from 'react';
function Home() {
  const options = {
    duration: 500,
    smooth: true,
  };
  const [isScrolled, setIsScrolled] = useState(false);
  const handleScroll = () => {
    // Calculate the scroll position
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Set a threshold value to determine when to change the opacity
    const scrollThreshold = 100;

    // Update the state based on the scroll position
    setIsScrolled(scrollY > scrollThreshold);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  const navClass = isScrolled ? 'opacity-100 delay-100' : 'opacity-0';

  return (
    <div className='mx-auto overflow-hidden select-none'>
      <Hero />
      <div className='container mx-auto'>
        <div id='scoreBoard'>
          <ScoreBoard />
          <Result />
          {/* <Individual /> */}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Home
