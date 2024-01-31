import React from 'react'
import Bsc from '../../assets/Avatars/Captains/Bsc/img.png'
import Bvoc from '../../assets/Avatars/Captains/Bvoc/img.png'
import Commerce from '../../assets/Avatars/Captains/Commerce/img.png'
import Arts from '../../assets/Avatars/Captains/Arts/img.png'
import { motion } from "framer-motion"
function Captains() {
    return (
        <div id='captains' className='mt-40'>
            <h1 className='text-center text-2xl font-bold'>Captains images</h1>
            <div className='flex flex-col gap-16 p-4'>
                <motion.div
                    initial={{ opacity: 0, x: -500 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
                    viewport={{ once: true }}
                >
                    <img src={Bsc} alt="Bsc" className='' />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -500 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
                    viewport={{ once: true }}
                >
                <img src={Bvoc} alt="Bvoc" />

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -500 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
                    viewport={{ once: true }}
                >
                <img src={Arts} alt="Arts" />

                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -500 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
                    viewport={{ once: true }}
                >
                <img src={Commerce} alt="Commerce" />

                </motion.div>
            </div>

        </div>
    )
}
export default Captains