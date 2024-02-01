import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useEffect, useState } from 'react';

function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navClass = isScrolled
  ? 'bg-gradient-to-b from-black to-transparent'
  : '';

  return (
    <div className={`fixed top-0 w-full text-white px-10 flex items-center justify-between z-50 cursor-pointer  ${navClass}`}>
      <img src={Logo} className='w-36' alt="logo" />
      <div className='flex gap-10 text-xl'>
        <Link
          activeClass="navActive"
          className=''
          to="hero"
          spy={true}
          smooth={true}
          offset={0}
          duration={500} >Home</Link>
        <Link activeClass="navActive"
          className='no-underline'
          to="scoreBoard"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500} >Score Board</Link>
        <NavLink 
          className='no-underline'
          to="/results"
          >Result</NavLink>
        <Link activeClass="navActive"
          className='no-underline'
          to="committee"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500} >Committee</Link>
        <Link activeClass="navActive"
          className='no-underline'
          to="captains"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500} >Captains</Link>
      </div>
    </div>
  );
}

export default NavBar;
