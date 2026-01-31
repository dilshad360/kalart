import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'
import Carousal from '../Result/Carousal'
function Result() {
  return (
    <div className='mb-36 result-section'>
        <h1 className='result-title'>Recent Results</h1>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        viewport={{ once: true }}
      >
        <div className='result-container' id='result'>
          <Carousal />
        </div>
        <div className='result-button-container'>
          <NavLink
            to="/results"
            className='result-button'>
            Other Results
          </NavLink>
        </div>
      </motion.div>
    </div>
  )
}

export default Result