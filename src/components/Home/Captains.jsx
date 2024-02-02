import React from 'react'
import Bsc from '../../assets/Avatars/Captains/Bsc/img.png'
import Bvoc from '../../assets/Avatars/Captains/Bvoc/img.png'
import Commerce from '../../assets/Avatars/Captains/Commerce/img.png'
import Arts from '../../assets/Avatars/Captains/Arts/img.png'
import { motion } from "framer-motion"
import '../../styles/Responsive.css'
import { useEffect } from 'react'

function Captains() {
   
      
    return (
        <div id='captains' className='mt-40 mb-16'>
            <h1 className='text-center text-4xl font-bold text-red-950 mb-12'>Captains</h1>
            <div className='flex flex-col gap-16 p-4 mx-auto items-center'>
                <motion.div
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
                    viewport={{ once: true }}
                >
                    <div className='text-center flex items-center gap-2  relative  mx-6 mb-6 overflow-hidden'>
                        <span className='h-0 w-0 border-b-[15px] border-t-[15px] border-l-[30px] border-l-red-900 border-transparent absolute -left-4'></span>
                        <hr className='border-[1.5px] border-red-900 w-1/2 mx-auto' />
                        <span className='text-4xl font-bold  uppercase bg-gradient-to-b from-red-600  to-orange-500 inline-block text-transparent bg-clip-text'>bsc</span>
                        <hr className='border-[1.5px] border-red-900 w-1/2 mx-auto' />
                        <span className='h-0 w-0 border-b-[15px] border-t-[15px] border-r-[30px] border-r-red-900 border-transparent absolute -right-4'></span>
                    </div>
                    <div>
                    <img src={Bsc} alt="Bsc" className='responsive-image-captains' />
                    <div className='flex justify-around font-semibold text-blue-950 capitalize'>
                        <p>Sabik</p>
                        <p>Ansaba</p>
                        <p>Nourin</p>
                        <p className='-mr-6'>Hamza Nizam</p>
                    </div>
                    </div>
                    
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
                    viewport={{ once: true }}
                >
                    <div className='text-center flex items-center gap-2  relative  mx-6 mb-6 overflow-hidden'>
                        <span className='h-0 w-0 border-b-[15px] border-t-[15px] border-l-[30px] border-l-red-900 border-transparent absolute -left-4'></span>
                        <hr className='border-[1.5px] border-red-900 w-1/2 mx-auto' />
                        <span className='text-4xl font-bold  uppercase bg-gradient-to-b from-red-600  to-orange-500 inline-block text-transparent bg-clip-text'>Bvoc</span>
                        <hr className='border-[1.5px] border-red-900 w-1/2 mx-auto' />
                        <span className='h-0 w-0 border-b-[15px] border-t-[15px] border-r-[30px] border-r-red-900 border-transparent absolute -right-4'></span>
                    </div>
                    <img src={Bvoc} alt="Bvoc" className='responsive-image-captains' />
                    <div className='flex justify-around font-semibold text-blue-950 capitalize'>
                        <p>Adhila</p>
                        <p>Riya Hanna</p>
                        <p>Riyas Ak</p>
                        <p >Shafsin</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
                    viewport={{ once: true }}
                >
                    <div className='text-center flex items-center gap-2  relative  mx-6 mb-6 overflow-hidden'>
                        <span className='h-0 w-0 border-b-[15px] border-t-[15px] border-l-[30px] border-l-red-900 border-transparent absolute -left-4'></span>
                        <hr className='border-[1.5px] border-red-900 w-1/2 mx-auto' />
                        <span className='text-4xl font-bold  uppercase bg-gradient-to-b from-red-600  to-orange-500 inline-block text-transparent bg-clip-text'>arts</span>
                        <hr className='border-[1.5px] border-red-900 w-1/2 mx-auto' />
                        <span className='h-0 w-0 border-b-[15px] border-t-[15px] border-r-[30px] border-r-red-900 border-transparent absolute -right-4'></span>
                    </div>
                    <img src={Arts} alt="Arts" className='responsive-image-captains' />
                    <div className='flex justify-around font-semibold text-blue-950 capitalize'>
                        <p>Arsalan KT</p>
                        <p>gopika p</p>
                        <p>Shafnas k</p>
                        <p className='text-center -mr-2'>Muhammed <br /> Fawaz PP</p>
                    </div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -300 }}
                    whileInView={{ opacity: 1, x: 0, transition: { duration: 1, delay: 0.2 } }}
                    viewport={{ once: true }}
                >
                    <div className='text-center flex items-center gap-2  relative  mx-6 mb-6 overflow-hidden'>
                        <span className='h-0 w-0 border-b-[15px] border-t-[15px] border-l-[30px] border-l-red-900 border-transparent absolute -left-4'></span>
                        <hr className='border-[1.5px] border-red-900 w-1/2 mx-auto' />
                        <span className='text-4xl font-bold  uppercase bg-gradient-to-b from-red-600  to-orange-500 inline-block text-transparent bg-clip-text'>Commerce</span>
                        <hr className='border-[1.5px] border-red-900 w-1/2 mx-auto' />
                        {/* <span className='h-4 w-4 bg-red-900 rotate-45 absolute -right-2'></span> */}
                        <span className='h-0 w-0 border-b-[15px] border-t-[15px] border-r-[30px] border-r-red-900 border-transparent absolute -right-4'></span>
                    </div>
                    <img src={Commerce} alt="Commerce" className='responsive-image-captains' />
                    <div className='flex justify-around font-semibold text-blue-950 capitalize'>
                        <p>Mirshad</p>
                        <p>Juniad</p>
                        <p>Haneena</p>
                        <p>Safwan</p>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}
export default Captains