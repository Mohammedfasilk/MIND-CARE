import React, { useEffect } from 'react'
import LibraryCard from '../../Component/Patient/LibraryCard'

function Library() {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
  return (
    <main>

        <section className='pt-20'>
            <div className='p-5 lg:p-10 text-2xl sm:text-3xl font-bold text-center w-full'>
                Library
            </div>
            <div className=' p-8 flex flex-col sm:flex-row items-center justify-center'>
                <input
                className='w-full sm:w-[75%] p-1 sm:p-2 rounded border border-neutral-400 placeholder:italic placeholder:font-thin'
                type="text" 
                placeholder='Search for Articles'/>
                <button className='ml-2 bg-[#17A39C] mt-2 sm:mt-0 p-1 sm:p-2 px-5 rounded text-white font-semibold'>
                    Search
                </button>
            </div>
            <section className='flex flex-col items-center p-10'>
                <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-16'>
                    <LibraryCard/>
                    <LibraryCard/>
                    <LibraryCard/>
                    <LibraryCard/>  
                    <LibraryCard/>  
                    <LibraryCard/>  
                    <LibraryCard/>  
                    <LibraryCard/>  
                    <LibraryCard/>  
                </div>
                <div className='p-10 font-semi-bold'>
                    <a href="">View More <i className="bi bi-arrow-right align-middle text-lg"></i></a>
                </div>
            </section>
        </section>
    </main>
  )
}

export default Library