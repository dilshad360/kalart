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
    <div className='mx-auto overflow-hidden select-none'>
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



      {/* back to top  */}
      <div className={`fixed bottom-6 right-6  ${navClass}`}>
        <button onClick={() => animateScroll.scrollToTop(options)} className='bg-slate-300 p-3 rounded-full'>
          {/*change log now its just for fun */}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-through-heart" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M2.854 15.854A.5.5 0 0 1 2 15.5V14H.5a.5.5 0 0 1-.354-.854l1.5-1.5A.5.5 0 0 1 2 11.5h1.793l.53-.53c-.771-.802-1.328-1.58-1.704-2.32-.798-1.575-.775-2.996-.213-4.092C3.426 2.565 6.18 1.809 8 3.233c1.25-.98 2.944-.928 4.212-.152L13.292 2 12.147.854A.5.5 0 0 1 12.5 0h3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.854.354L14 2.707l-1.006 1.006c.236.248.44.531.6.845.562 1.096.585 2.517-.213 4.092-.793 1.563-2.395 3.288-5.105 5.08L8 13.912l-.276-.182a22 22 0 0 1-2.685-2.062l-.539.54V14a.5.5 0 0 1-.146.354zm2.893-4.894A20.4 20.4 0 0 0 8 12.71c2.456-1.666 3.827-3.207 4.489-4.512.679-1.34.607-2.42.215-3.185-.817-1.595-3.087-2.054-4.346-.761L8 4.62l-.358-.368c-1.259-1.293-3.53-.834-4.346.761-.392.766-.464 1.845.215 3.185.323.636.815 1.33 1.519 2.065l1.866-1.867a.5.5 0 1 1 .708.708z" />
          </svg>

        </button>
      </div>
    </div>
  )
}

export default Home
