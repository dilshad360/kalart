import React from 'react'
import { motion } from "framer-motion"
import { NavLink } from 'react-router-dom'
import Carousal from '../Result/Carousal'
function Result() {
  return (
    <div className=' mb-36'>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        viewport={{ once: true }}
      >
        <div className='w-full flex gap-4 items-center' id='result'>
          <Carousal />

        </div>
        <div className='mt-10 flex w-full items-center justify-center ' >
          <NavLink to='/results' className='text-lg md:text-2xl text-center text-white bg-orange-950 capitalize rounded-md py-2 px-4 font-semibold cursor-pointer hover:bg-orange-900 transition-all ease-in-out '>Other Results</NavLink>

        </div>
      </motion.div>

    </div>

  )
}

export default Result