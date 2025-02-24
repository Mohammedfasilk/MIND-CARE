import React from 'react'

function BookingTime() {
  return (
    <div className='bg-white/85 w-fit p-8 px-10 space-y-5 rounded-lg'>
        <h2 className='font-bold text-xl'>Morning</h2>
        <div className='grid grid-rows-1 grid-cols-2 sm:grid-cols-4 gap-5 lg:gap-16'>
            <button className='border-[3px] px-3 rounded border-green-500'>
                8:00 AM
            </button>
            <button className='border-[3px] px-3 rounded border-green-500'>
                8:00 AM
            </button>
            <button className='border-[3px] px-3 rounded border-green-500'>
                8:00 AM
            </button>
            <button className='border-[3px] px-3 rounded border-green-500'>
                8:00 AM
            </button>
        </div>
    </div>
  )
}

export default BookingTime