import React from 'react'
import BookingDate from '../../Component/Patient/BookingDate'
import BookingTime from '../../Component/Patient/BookingTime'

function PatientBooking() {
  return (
    <main className='pt-16'>
        <section className='bg-center bg-cover' style={{backgroundImage:('url("/src/assets/Patient/pexels-shvets-production-9052846.jpg")')}}>
            <div className='bg-black/30  py-5'>
            <div className='flex md:justify-evenly p-3 sm:p-10 overflow-scroll'>
                <BookingDate/>
                <BookingDate/>
                <BookingDate/>
                <BookingDate/>
                <BookingDate/>
                <BookingDate/>
                <BookingDate/>
            </div>
            <div className='flex py-5 flex-col items-center space-y-5'>
                <BookingTime/>
                <BookingTime/>
                <BookingTime/>

            </div>
            </div>
        </section>
    </main>
  )
}

export default PatientBooking