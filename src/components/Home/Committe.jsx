import React from 'react'
import main1 from '../../assets/Avatars/Committe/Main/img1.png'
import main2 from '../../assets/Avatars/Committe/Main/img2.png'
import main3 from '../../assets/Avatars/Committe/Main/img3.png'
import onstage1 from '../../assets/Avatars/Committe/OnStage/img1.png'
import onstage2 from '../../assets/Avatars/Committe/OnStage/img2.png'
import onstage3 from '../../assets/Avatars/Committe/OnStage/img3.png'
import onstage4 from '../../assets/Avatars/Committe/OnStage/img4.png'
import offStage1 from '../../assets/Avatars/Committe/OffStage/img1.png'
import offStage2 from '../../assets/Avatars/Committe/OffStage/img2.png'
import offStage3 from '../../assets/Avatars/Committe/OffStage/img3.png'
import offStage4 from '../../assets/Avatars/Committe/OffStage/img4.png'
import { motion } from "framer-motion"

function Committe() {
  return (
    <div className='w-full mt-40 mx-auto' id='committee' >
      <h1 className='font-bold text-2xl text-center'>Committe</h1>
      <main className='flex flex-col gap-16 p-4'>
        {/* Main Committe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } }}
          viewport={{ once: true }}
        >
          <section className='flex gap-10 w-full mx-auto items-center justify-center'>

            <div className='flex flex-col items-center justify-center'>
              <div className='flex items-center justify-end  w-full'>
                <h1 className='font-bold text-red-700 text-2xl bg-green-400'>Committee</h1>
              </div>
              <div className='relative bg-red-300 h-[250px] w-[160px] overflow-hidden'>
                <img src={main1} alt='main1' className='w-full h-full object-cover' />
                <div className='absolute  h-20 w-10 -top-8 -left-5 rotate-45 background-custom-color' ></div>
                <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5 rotate-45'></div>
              </div>
              <div className='flex items-center justify-start  w-full'>
                <h3 className='font-bold  bg-green-400'>name</h3>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className='flex items-center justify-end  w-full'>
                <h1 className='font-bold text-red-700 text-2xl bg-green-400'>Committee</h1>
              </div>
              <div className='relative bg-red-300 h-[250px] w-[160px] overflow-hidden'>
                <img src={main2} alt='main1' className='w-full h-full object-cover' />
                <div className='absolute background-custom-color h-20 w-10 -top-8 -left-5 rotate-45'></div>
                <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5 rotate-45'></div>
              </div>
              <div className='flex items-center justify-start  w-full'>
                <h3 className='font-bold  bg-green-400'>name</h3>
              </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
              <div className='flex items-center justify-end  w-full'>
                <h1 className='font-bold text-red-700 text-2xl bg-green-400'>Committee</h1>
              </div>
              <div className='relative bg-red-300 h-[250px] w-[160px] overflow-hidden'>
                <img src={main3} alt='main1' className='w-full h-full object-cover' />
                <div className='absolute background-custom-color h-20 w-10 -top-8 -left-5 rotate-45'></div>
                <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5 rotate-45'></div>
              </div>
              <div className='flex items-center justify-start  w-full'>
                <h3 className='font-bold  bg-green-400'>name</h3>
              </div>
            </div>

          </section>
        </motion.div>
        <section className='flex flex-col gap-2 items-center'>

          <div>
            <h1 className='font-bold text-red-700 text-2xl bg-green-400 text-center'>On stage </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } }}
            viewport={{ once: true }}
          >
            {/* OnStage Commiite */}
           
              <div className='flex gap-4 w-full mx-auto'>
                <div className='flex flex-col items-center justify-center'>
                  <div className='relative h-[220px] w-[160px] overflow-hidden'>
                    <img src={onstage1} alt='main1' className='w-full h-full object-cover' />
                    <div className='absolute h-20 w-8 -top-8 -left-5 rotate-[55deg]  background-custom-color'></div>
                    <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5  rotate-[55deg]'></div>
                  </div>
                  <div className='flex items-center justify-start  w-full'>
                    <h3 className='font-bold  bg-green-400'>name</h3>
                  </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <div className='relative h-[220px] w-[160px] overflow-hidden'>
                    <img src={onstage2} alt='main1' className='w-full h-full object-cover' />
                    <div className='absolute h-20 w-8 -top-8 -left-5 rotate-[55deg] background-custom-color'></div>
                    <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5  rotate-[55deg]'></div>
                  </div>
                  <div className='flex items-center justify-start  w-full'>
                    <h3 className='font-bold  bg-green-400'>name</h3>
                  </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <div className='relative h-[220px] w-[160px] overflow-hidden'>
                    <img src={onstage3} alt='main1' className='w-full h-full object-cover' />
                    <div className='absolute h-20 w-8 -top-8 -left-5 rotate-[55deg]  background-custom-color'></div>
                    <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5  rotate-[55deg]'></div>
                  </div>
                  <div className='flex items-center justify-start  w-full'>
                    <h3 className='font-bold  bg-green-400'>name</h3>
                  </div>
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <div className='relative h-[220px] w-[160px] overflow-hidden'>
                    <img src={onstage4} alt='main1' className='w-full h-full object-cover ' />
                    <div className='absolute h-full w-2 top-0 bottom-0 left-0  background-custom-color '></div>
                    <div className='absolute h-20 w-8 -top-8 -left-5 rotate-[55deg] background-custom-color'></div>
                    <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5  rotate-[55deg]'></div>
                  </div>
                  <div className='flex items-center justify-start  w-full'>
                    <h3 className='font-bold  bg-green-400'>name</h3>
                  </div>
                </div>
              </div>
          </motion.div>
        </section>

        <section className='flex flex-col gap-2 items-center'>
          <div>
            <h1 className='font-bold text-red-700 text-2xl bg-green-400 text-center'>On stage </h1>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1, transition: { duration: 1, delay: 0.5 } }}
            viewport={{ once: true }}
          >
            {/* OffStage Commiite */}

            <div className='flex gap-4  mx-auto'>
              <div className='flex flex-col items-center justify-center'>
                <div className='relative h-[220px] w-[160px] overflow-hidden'>
                  <img src={offStage1} alt='main1' className='w-full h-full object-cover' />
                  <div className='absolute h-20 w-8 -top-8 -left-5 rotate-[55deg]  background-custom-color'></div>
                  <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5  rotate-[55deg]'></div>
                </div>
                <div className='flex items-center justify-start  w-full'>
                  <h3 className='font-bold  bg-green-400'>name</h3>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='relative h-[220px] w-[160px] overflow-hidden'>
                  <img src={offStage2} alt='main1' className='w-full h-full object-cover' />
                  <div className='absolute h-20 w-8 -top-8 -left-5 rotate-[55deg] background-custom-color'></div>
                  <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5  rotate-[55deg]'></div>
                </div>
                <div className='flex items-center justify-start  w-full'>
                  <h3 className='font-bold  bg-green-400'>name</h3>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='relative h-[220px] w-[160px] overflow-hidden'>
                  <img src={offStage3} alt='main1' className='w-full h-full object-cover' />
                  <div className='absolute h-20 w-8 -top-8 -left-5 rotate-[55deg]  background-custom-color'></div>
                  <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5  rotate-[55deg]'></div>
                </div>
                <div className='flex items-center justify-start  w-full'>
                  <h3 className='font-bold  bg-green-400'>name</h3>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <div className='relative h-[220px] w-[160px] overflow-hidden'>
                  <img src={offStage4} alt='main1' className='w-full h-full object-cover ' />
                  <div className='absolute h-full w-2 top-0 bottom-0 left-0  background-custom-color '></div>
                  <div className='absolute h-20 w-8 -top-8 -left-5 rotate-[55deg] background-custom-color'></div>
                  <div className='absolute background-custom-color h-[70px] w-10 -bottom-8 -right-5  rotate-[55deg]'></div>
                </div>
                <div className='flex items-center justify-start  w-full'>
                  <h3 className='font-bold  bg-green-400'>name</h3>
                </div>
              </div>

            </div>
          </motion.div>
        </section>

      </main>
    </div>

  )
}

export default Committe