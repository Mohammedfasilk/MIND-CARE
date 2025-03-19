import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
        <section className='bg-red-500 h-screen flex items-end py-16'>
            <div className='flex justify-evenly w-full'>
                <Link to={'/Schedules'} className='text-center w-40 bg-white py-10 px-2 rounded-lg'>
                    <div>
                        <i>icon</i>
                    </div>
                    <div>
                        <h3 className='text-lg font-bold'>Daily Schedules</h3>
                    </div>
                </Link>

                {/* <div className='text-center w-40 bg-white py-10 px-2 rounded-lg'>
                    <div>
                        <i>icon</i>
                    </div>
                    <div>
                        <h3 className='text-lg font-bold'>Appointments</h3>
                    </div>
                </div> */}

                <div className='text-center w-40 bg-white py-10 px-2 rounded-lg'>
                    <div>
                        <i>icon</i>
                    </div>
                    <Link to='/Booking'>
                    <div>
                        <h3 className='text-lg font-bold'>Manage Bookings</h3>
                    </div>
                    </Link>
                </div>

            </div>
        </section>
    </main>
  )
}

export default Home