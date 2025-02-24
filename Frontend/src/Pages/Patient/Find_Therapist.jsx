import React from 'react'
import TherapistCard from '../../Component/Patient/TherapistCard'

function Find_Therapist() {
  return (
    <main className='pt-[70px] '>
        <section>
            <div className='p-8 flex flex-col sm:flex-row items-center justify-center'>
                <input
                className='w-full sm:w-[75%] p-1 sm:p-2 rounded border border-neutral-400 placeholder:italic placeholder:font-thin'
                type="text" 
                placeholder='Search for therapist'/>
                <button className='ml-2 bg-[#17A39C] mt-2 sm:mt-0 p-1 sm:p-2 px-5 rounded text-white font-semibold'>
                    Search
                </button>
            </div>
            <div className='flex justify-between p-3 bg-[#17A39C]'>
                <div className='flex justify-evenly w-[50%]'>
                <a className='cursor-pointer bg-white px-5 py-1 rounded' >Male</a>
                <a className='cursor-pointer bg-white px-5 py-1 rounded' >Female</a>
                <a className='cursor-pointer bg-white px-5 py-1 rounded' >Near Location</a>
                </div>
                <a className='cursor-pointer bg-white px-5 py-1 rounded' >All Filters</a>
            </div>
            <div className='flex flex-col items-center w-full px-10 bg-[#F8F5F5] py-5'>
                <TherapistCard/>
                <TherapistCard/>
                <TherapistCard/>
            </div>
        </section>
    </main>
  )
}

export default Find_Therapist