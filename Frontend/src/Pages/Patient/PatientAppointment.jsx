import React, { useEffect } from 'react'
import AppointmentCard from '../../Component/Patient/AppointmentCard'

function PatientAppointment() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <main className='pt-20 bg-neutral-100'>
        <section className='flex flex-col items-center w-full'>
            <div className='p-10'>
                <h1 className='text-2xl sm:text-3xl font-bold'>
                    Appointments
                </h1>
            </div>
            <div className='w-full px-5 md:px-32 py-10'>
                <h1 className='text-xl sm:text-2xl font-bold'>
                    Scheduled
                </h1>
                <AppointmentCard isSheduled/>
            </div>
            <div className='w-full px-5 md:px-32 py-10'>
                <h1 className='text-xl sm:text-2xl font-bold'>
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