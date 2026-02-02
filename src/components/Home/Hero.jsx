/* eslint-disable react/no-unescaped-entities */
import Logo2 from '../../assets/logo3.png';
import Logo3 from '../../assets/collegelogo.png';
import BgMain from '../../assets/bg.jpg';
import BgBlur from '../../assets/logo4.png';
import { NavLink as RouterNavLink } from 'react-router-dom';
import '../../styles/Hero.css';

function Hero() {

    return (
        <div className="hero-container">
            {/* Background Images */}
            <img src={BgMain} alt="Background" className="hero-bg-main" />
            <img src={BgBlur} alt="Background Blur" className="hero-bg-blur" />
            
            <div className="hero-content">
                {/* Centered Logo */}
                <div className="hero-logo flex flex-col items-center">
                    <img src={Logo3} alt="Logo" className="w-72 h-auto" />

                    <img src={Logo2} alt="Logo" className="hero-logo-img" />
                </div>
                
                {/* Navigation Buttons */}
                <div className="hero-navigation">
                     <RouterNavLink
                        to="/scoreboard"
                        spy={true}
                        smooth={true}
                        offset={-100}
                        duration={500}
                        className="hero-nav-btn"
                    >
                        Score Board
                    </RouterNavLink>
                    
                    <RouterNavLink
                        to="/results"
                        className="hero-nav-btn"
                    >
                        Result
                    </RouterNavLink>
                </div>
            </div>
        </div>
    )
}

export default Hero;
