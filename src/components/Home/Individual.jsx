import React from 'react'
import { motion } from "framer-motion"
function Individual() {
  return (
    <div className='my-20'>

    <motion.div
    initial={{ opacity: 0, x: -500 }}
    whileInView={{ opacity: 1, x: 0, transition: { duration: 1 , delay: 0.2 } }}
    viewport={{ once: true }}
  >
    <div className='h-60 w-full ' id='individual'>

      <h1 className=' font-bold text-2xl text-center'>Individual</h1>
    </div>
    </motion.div>
    </div>

  )
}

export default Individual