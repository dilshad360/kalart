import Hero from './components/Home/Hero'
import NavBar from './components/Home/NavBar'
import Captains from './components/Home/Captains'
import Footer from './components/Home/Footer'
import Committe from './components/Home/Committe'
import ScoreBoard from './components/Home/ScoreBoard'
import Individual from './components/Home/Individual'
import Result from './components/Home/Result'
import { animateScroll } from 'react-scroll';
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
    <div className='mx-auto overflow-hidden'>
      <NavBar />
      <Hero />
      <div className='container mx-auto'>
      <div id='scoreBoard'>
      <ScoreBoard />
      <Individual />
      <Result />
      </div>
      <Committe />
      <Captains />
      </div>
      <Footer />
      <div className={`fixed bottom-4 right-4  ${navClass}`}>
        <button onClick={() => animateScroll.scrollToTop(options)} className='bg-slate-300 p-2 rounded-lg'>Top</button>
      </div>
    </div>
  )
}

export default Home
