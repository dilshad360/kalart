import HeroImage from '../../assets/hero.png';
import Logo2 from '../../assets/logo2.svg';
import Shadow from '../../assets/shadow.png';
import '../../styles/Hero.css';

function Hero() {
    return (
        <div className='relative'>

            {/*  due to more responsive i will design normal css .... */}
            <div className="flex items-center justify-center relative" id='hero'>
                <img src={HeroImage} className='object-cover w-full h-full relative ' alt="hero-bg" />

                <img src={Shadow} alt="shadow" className='absolute top-3 animate-pulse' />

                <div className="absolute-container">
                    <div className='child-1-parent'>
                        <h1 className="child-1">“Vision Unveils: </h1>
                        <h1 className="child-2">The Artistry Within”</h1>
                    </div>
                    <div>
                        <h4 className='child-3'>40th EMEA College Students Union</h4>
                        <h6 className='child-4'>presents</h6>
                    </div>
                    <div className='relative'>
                        <img src={Logo2} alt="logo2" className='child-logo' />
                        <p className='child-logo-p'>Fine Arts 23-24</p>
                    </div>
                    <div>
                        <h5 className='child-date'>07 FEB - 08 FEB 2024</h5>
                    </div>
                </div>

            </div>
            <div className='-mt-16  h-96 w-full z-50 mx-auto px-20'>
                <div className='bg-white h-full w-full pt-10 text-center'>
Content
                </div>
                {/* Your card content here */}
            </div>
        </div>
    )
}

export default Hero;
