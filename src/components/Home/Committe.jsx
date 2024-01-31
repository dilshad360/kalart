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


function Committe() {
  return (
    <div className='w-full'>
      <h1 className='font-bold text-2xl text-center'>Committe</h1>
      <main className='flex flex-col gap-4'>
        {/* Main Committe */}
        <section className='flex gap-4 w-full'>
          <div className=''>
            <img src={main1} alt='main1' />
          </div>
          <div className=''>
          <img src={main2} alt='main1' className='' />
          </div>
          <div className=''>
          <img src={main3} alt='main1' className='' />
          </div>
        </section>
        {/* OnStage Commiite */}
        <section className='flex gap-4 w-full'>
          <div className=''>
            <img src={onstage1} alt='main1' />
          </div>
          <div className=''>
          <img src={onstage2} alt='main1' className='' />
          </div>
          <div className=''>
          <img src={onstage3} alt='main1' className='' />
          </div>
          <div className=''>
          <img src={onstage4} alt='main1' className='' />
          </div>
        </section>
        <section className='flex gap-4 w-full'>
          <div className=''>
            <img src={offStage1} alt='main1' />
          </div>
          <div className=''>
          <img src={offStage2} alt='main1' className='' />
          </div>
          <div className=''>
          <img src={offStage3} alt='main1' className='' />
          </div>
          <div className=''>
          <img src={offStage4} alt='main1' className='' />
          </div>
        </section>
      </main>
    </div>

  )
}

export default Committe