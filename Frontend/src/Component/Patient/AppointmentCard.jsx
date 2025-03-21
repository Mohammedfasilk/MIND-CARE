import React from 'react'
import {motion} from 'framer-motion'
function AppointmentCard(props) {
  return (
    <motion.div
    initial={{ opacity: 1, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true, amount: 0.3 }}
    className='mt-10 w-full p-5 flex flex-col sm:flex-row justify-between rounded-xl shadow-xl border border-neutral-100 bg-white'>
                   <div>
                   <h1 className='text-xl font-semibold'>
                        Mohammed Fasil K
                    </h1>
                   <div className='space-y-2'>
                   <p className='text-sm italic text-gray-700'>
                    Licensed Mental Health Counselor
                    </p>
                    <p>
                        Counsling type : Video call/ Voice call/ Chat
                    </p>
                    <p>
                        Counsling fee : ₹500
                    </p>
                   </div>
                   </div>
                   <div className=''>
                   <div>
                   <p className='py-2 sm:py-0'>
                        <span className='font-bold'>Date:</span>  10/10/2025 & <span className='font-bold'>Time:</span> 12:30 
                    </p>
                   </div>
                   <div className='flex justify-center pt-6'>
                    {props.isSheduled && <button className='border-2 border-red-500 rounded px-5 font-bold text-red-500'>Join</button>}
                   </div>
                   </div>
                </motion.div>
  )
}

export default AppointmentCard