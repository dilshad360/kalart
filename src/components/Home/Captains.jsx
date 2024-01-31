import React from 'react'
import Bsc from '../../assets/Avatars/Captains/Bsc/img.png'
import Bvoc from '../../assets/Avatars/Captains/Bvoc/img.png'
import Commerce from '../../assets/Avatars/Captains/Commerce/img.png'
import Arts from '../../assets/Avatars/Captains/Arts/img.png'

function Captains() {
    return (
        <div>
            <h1 className='text-center text-2xl font-bold'>Captains images</h1>
            <p className='text-center'>img size needs crop captains...</p>
            <div className='flex flex-col '>
                <img src={Bsc} alt="Bsc" className='bg-green-400' />
                <img src={Bvoc} alt="Bvoc" />
                <img src={Arts} alt="Arts" />
                <img src={Commerce} alt="Commerce" />
            </div>

        </div>
    )
}

export default Captains