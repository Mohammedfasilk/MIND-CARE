import React from 'react'

function Slot({time,removeSlot}) {
    
  return (
    <div className="inline-flex border-[3px] font-bold w-fit rounded border-black">
          <div className='px-6'>
          {time}
          </div>
          <button onClick={()=>removeSlot(time)} className='px-2'>
          <i className="bi bi-trash text-red-600" ></i>
          </button>
    </div>
  )
}

export default Slot