import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="flex justify-between xl:items-center xl:space-x-20 w-full xl:px-16 py-4 border-b fixed bg-white z-10">
    <div className="flex px-5 items-center">
      <h1 className="text-2xl sm:text-3xl font-extrabold text-blue-950">
        MindCare
      </h1>
    </div>

    
   
    
    <div className="flex items-center">
      <Link to="/Profile">
        <i className="bi bi-person-circle text-2xl"></i>
      </Link>
      <div className="xl:hidden px-5">
        
      </div>
    </div>
  </nav>
  )
}

export default Navbar