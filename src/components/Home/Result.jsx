import React from 'react'
import { motion } from "framer-motion"
function Result() {
  return (
    <div className='my-20 mb-48'>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 1, delay: 0.5 } }}
        viewport={{ once: true }}
      >
        <div className='h-40  w-full flex gap-4 items-center' id='result'>
          <h1 className=' font-bold text-2xl text-center bg-slate-300 w-[250px] h-[300px] rounded-lg p-4 text-red-900 shadow-xl mx-auto'>Results</h1>
          <h1 className=' font-bold text-2xl text-center bg-slate-300 w-[250px] h-[300px] rounded-lg p-4 text-red-900 shadow-xl mx-auto'>Results</h1>
          <h1 className=' font-bold text-2xl text-center bg-slate-300 w-[250px] h-[300px] rounded-lg p-4 text-red-900 shadow-xl mx-auto'>Results</h1>
        </div>
      </motion.div>
    </div>

  )
}

export default Result