import React from 'react'
import AppointmentCard from '../../Component/Patient/AppointmentCard'

function PatientAppointment() {
  return (
    <main className='pt-[70px] bg-neutral-100'>
        <section className='flex flex-col items-center w-full'>
            <div className='p-8'>
                <h1 className='text-[26px] font-bold'>
                    Appointments
                </h1>
            </div>
            <div className='w-full px-5 md:px-32 py-10'>
                <h1 className='text-[24px] font-bold'>
                    Upcoming
                </h1>
                <AppointmentCard/>
            </div>
            <div className='w-full px-5 md:px-32 py-10'>
                <h1 className='text-[24px] font-bold'>
                    History
                </h1>
                <AppointmentCard/>
                <AppointmentCard/>
            </div>
        </section>
    </main>
  )
}

export default PatientAppointment