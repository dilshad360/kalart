import React from 'react'
import { motion } from "framer-motion"
function Result() {
  return (
    <div className='my-20'>

    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1, transition: { duration: 1 , delay: 0.5 } }}
    viewport={{ once: true }}
  >
    <div className='h-40  w-full' id='result'>
  <h1 className='font-bold text-2xl text-center'>Result</h1>
    </div>
  </motion.div>
  </div>

  )
}

export default Result