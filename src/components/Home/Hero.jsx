import HeroImage from '../../assets/hero.png';
import Logo2 from '../../assets/logo2.svg';
import Shadow from '../../assets/shadow.png';


function Hero() {
    return (
        <div className="flex items-center justify-center" id='hero'>
            <img src={HeroImage} className='object-cover w-full h-full' alt="hero-bg" />
            <img src={Shadow} alt="shadow" className=' absolute top-3 animate-pulse' />
            <div className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center text-white flex-col">
                <h1 className="text-5xl font-bold uppercase">“Vision Unveils: </h1>
                <h1 className="text-5xl font-bold uppercase pb-6">The Artistry Within”</h1>
                <h4 className='text-3xl font-medium'>40th EMEA College Students Union</h4>
                <h6 className='text-xl pb-10'>presents</h6>
                <img src={Logo2} alt="logo2" className='w-[360px]' />
                <h5 className='text-2xl' >07 FEB - 08 FEB 2024</h5>
            </div>
        </div>
    )
}

export default Hero