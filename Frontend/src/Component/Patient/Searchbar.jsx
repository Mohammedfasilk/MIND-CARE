import React from 'react'

function Searchbar() {
  return (
    <div className=' p-8 flex flex-col sm:flex-row items-center justify-center'>
    <input
    className='w-full sm:w-[75%] p-1 sm:p-2 rounded border border-neutral-400 placeholder:italic placeholder:font-thin'
    type="text" 
    placeholder='Search for Articles'/>
    <button className='ml-2 bg-[#17A39C] mt-2 sm:mt-0 p-1 sm:p-2 px-5 rounded text-white font-semibold'>
        Search
    </button>
</div>
  )
}

export default Searchbar