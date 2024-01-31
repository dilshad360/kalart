import Hero from './components/Home/Hero'
import NavBar from './components/Home/NavBar'
import Captains from './components/Home/Captains'
import Footer from './components/Home/Footer'
import Committe from './components/Home/Committe'
import ScoreBoard from './components/Home/ScoreBoard'
import Individual from './components/Home/Individual'
import Result from './components/Home/Result'
function Home() {


  return (
    <div>
      <NavBar />
      <Hero />
      <ScoreBoard />
      <Individual />
      <Result />
      <Committe />
      <Captains />
      <Footer />
    </div>
  )
}

export default Home
