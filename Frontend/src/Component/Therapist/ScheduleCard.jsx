import React from 'react'

function ScheduleCard({name,type,number,place,date,time}) {
  return (
    <div className='mt-10 w-full p-5 flex flex-col sm:flex-row justify-between rounded-xl shadow-xl border border-neutral-100 bg-white'>
    <div>
    <h1 className='text-xl sm:text-2xl font-bold py-2'>
        {name}
     </h1>
    <div className='space-y-2'>
     <p>
        <span className='font-semibold'> Counsling type : </span>{type}
     </p>
     <p>
       <span className='font-semibold'>Mobile Number :</span>  {number}
     </p>
     <p>
        <span className='font-semibold'>Place :</span> {place}
     </p>
    </div>
    </div>
    <div className=''>
    <div>
    <p className='py-2 sm:py-0'>
         <span className='font-bold'>Date:</span>  {date} <span className='font-bold'>& Time:</span> {time}
     </p>
    </div>
    <div className='flex justify-center pt-6'>
     <button className='border-2 border-red-500 rounded px-5 font-bold text-red-500'>Join</button>
    </div>
    </div>
 </div>
  )
}

export default ScheduleCard