/* eslint-disable react/no-unescaped-entities */
import Logo2 from '../../assets/logo.jpeg';
import { Link, NavLink } from 'react-scroll';
import { NavLink as RouterNavLink } from 'react-router-dom';
import '../../styles/Hero.css';

function Hero() {

    return (
        <div className="hero-container">
            <div className="hero-content">
                {/* Centered Logo */}
                <div className="hero-logo">
                    <img src={Logo2} alt="Logo" className="hero-logo-img rounded-2xl" />
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
