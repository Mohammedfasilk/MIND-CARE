import React from 'react'
import { Link } from 'react-router-dom'

function TherapistCard() {
  return (
    <div className='flex items-center p-3 w-[70%] rounded-xl shadow-2xl shadow-neutral-400 mt-8 bg-white'>
        <div>
            <img className='h-[120px] w-[100px]' src="https://letsenhance.io/static/73136da51c245e80edc6ccfe44888a99/1015f/MainBefore.jpg" alt="profile" />
        </div>
        <div className='px-3 w-[60%]'>
            <h1 className='font-bold text-xl'>
                Name
            </h1>
            <p className='text-sm font-thin italic'>Location</p>
            <p>Licenced at</p>
            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod, a? Corrupti dolores modi ipsa quis dolor voluptatem iste enim quo earum cum esse possimus rem ea perferendis, natus at quas?
            </p>
        </div>
        <div className='px-10'>
        <Link to='/booking' className='bg-[#17A39C] p-3 px-5 rounded text-white font-semibold shadow-md shadow-black/50'>Book an Appointment</Link>
        </div>
        
    </div>
  )
}

export default TherapistCard