import React from 'react'

function Advertise() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mt-20  gap-3 px-8'>
        <div>
            <img src={require('../Resources/ad1.png')}/>
        </div>
        <div>
        <img src={require('../Resources/ad2.png')}/>

        </div>
      
    </div>
  )
}

export default Advertise
