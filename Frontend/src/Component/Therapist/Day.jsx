import React, { useState } from 'react'

function Day(props) {
  const [active,setActive] = useState(false)

  return (
    <div>
    <button 
    onClick={()=>{
        props.handleDate?.(props.day)
    }} className={`ml-5 w-24 h-20 ${(props.day == props.selected) ? 'bg-blue-700' : 'bg-[#17A39C]'} font-bold text-white rounded-lg`}>
        <p>{props.day}</p>
        <p>{props.date}</p>
    </button>
</div>
  )
}

export default Day