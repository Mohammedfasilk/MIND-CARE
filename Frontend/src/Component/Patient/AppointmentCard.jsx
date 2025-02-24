import React from 'react'

function AppointmentCard() {
  return (
    <div className='mt-10 w-full p-5 flex flex-col sm:flex-row justify-between rounded-xl shadow-xl border border-neutral-100 bg-white'>
                   <div className='space-y-2'>
                   <h1 className='text-xl font-semibold'>
                        Name
                    </h1>
                    <p>
                    Licensed Mental Health Counselor
                    </p>
                    <p>
                        Counsling type : Video call/ Voice call/ Chat
                    </p>
                    <p>
                        Counsling fee : ₹500
                    </p>
                   </div>
                   <div className=''>
                    <p className='py-2 sm:py-0'>
                        Date: 10/10/2025 & Time: 12:30 
                    </p>
                   </div>
                </div>
  )
}

export default AppointmentCard