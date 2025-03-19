import React from 'react'

function SessionCard({icon,title,size}) {
  return (
    <div className='text-center w-fit space-y-4'>
        <div className={`text-6xl text-red-600`} >
            <i className={icon}></i>
        </div>
        <div className='text-xl font-bold italic'>
            <h3>{title}</h3>
        </div>
    </div>
  )
}

export default SessionCard