import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';

function NavBar() {
  return (
    <div className="absolute w-full text-white px-10 flex items-center justify-between">
      <img src={Logo} className='w-36' alt="logo" />
      <div className='flex gap-10 text-xl'>
        <Link to="/">Home</Link>
        <Link to="/scoreboard">Score Board</Link>
        <Link to="/results">Result</Link>
        <Link to="/committee">Committee</Link>
        <Link to="/captains">Captains</Link>
      </div>
    </div>
  );
}

export default NavBar;
