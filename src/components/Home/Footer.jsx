import React from 'react'

function Footer() {
  return (
    <div>
      <footer className='
              h-fit
              w-full 
              font-bold 
              text-2xl 
              text-center
            bg-red-950
            text-white 
              p-8
              rounded-t-2xl
              flex 
              justify-between
                    '>

        {/* left section */}
        <div className='h-24'>
          Logo
        </div>
        {/* right section */}
        <div className='h-24'>
          Content
        </div>
        
      </footer>

    </div>
  )
}

export default Footer