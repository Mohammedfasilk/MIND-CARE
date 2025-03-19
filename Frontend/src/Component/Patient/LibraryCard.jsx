import React from 'react'
import cardimg from '/src/assets/Patient/istockphoto-1363774646-612x612.jpg'
function LibraryCard() {
  return (
    <div className='border w-fit rounded-2xl overflow-hidden shadow-2xl shadow-neutral-500'>
       <div className='min-w-[250px] max-w-[300px] max-h-[300px]'>
          <img src={cardimg} alt="" />
        </div> 
        <div className='bg-[#ffff]'>
        <div className='p-3 text-center'>
            <h1 className='text-xl font-bold py-2'>
                Article Title
            </h1>
            <p className='max-w-[300px] max-h-[75px] overflow-hidden'>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere ratione optio reiciendis cupiditate perferendis cum! Sunt, id consequuntur sequi voluptatum dignissimos alias ut officiis, ex soluta cum pariatur iusto vero.
            </p>
        </div>
        <div className='p-3'>
            <p >
                Author Details
            </p>
        </div>
        </div>
    </div>
  )
}

export default LibraryCard