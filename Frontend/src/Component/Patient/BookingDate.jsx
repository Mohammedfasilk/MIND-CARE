import React from 'react'

function BookingDate({day,date}) {
  return (
    <div>
        <button className='ml-5 p-3 px-5 lg:p-4 lg:px-8 bg-[#17A39C] font-bold text-white rounded-lg'>
            <p>{day}</p>
            <p>{date}</p>
        </button>
    </div>
  )
}

export default BookingDate