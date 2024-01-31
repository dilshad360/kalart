import Logo from '../assets/logo.svg'

function NavBar() {
    return (
        <div className="absolute w-full text-white px-10 flex items-center justify-between">
            <img src={Logo} className='w-40' alt="logo" />
            <div className='flex gap-10 text-xl'>
                <a href="#">Home</a>
                <a href="#">Score Board</a>
                <a href="#">Result</a>
                <a href="#">Committe</a>
                <a href="#">Captains</a>
            </div>
        </div>
    )
}

export default NavBar