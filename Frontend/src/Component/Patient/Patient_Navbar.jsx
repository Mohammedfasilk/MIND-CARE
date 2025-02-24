import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom';




function Patient_Navbar() {
    const myElementRef = useRef(null);
    const [toggle , SetToggle] = useState(false)

    const MenuToggle = ()=>{
          const Menu=myElementRef.current
          toggle?  Menu.classList.add('hidden') : Menu.classList.remove('hidden')
          SetToggle(!toggle)
    }

  return (
    <nav className='flex justify-between xl:items-center xl:space-x-20 w-full xl:px-16 py-4 border-b fixed bg-white z-10'>
        <div className='flex px-5 items-center'>
            <h1 className='text-3xl font-extrabold text-blue-950' >
                MindCare
            </h1>
        </div>
        <div className='xl:hidden px-5'>
        <button onClick={MenuToggle} className='bg-[#17A39C] text-white font-bold rounded p-2'>Menu</button>
        </div>
        <div ref={myElementRef}  className='toggle hidden xl:flex absolute xl:static mt-10 xl:mt-0  justify-center right-0  items-center rounded-b-xl bg-white/95 py-2 xl:py-2 border-b xl:border-b-0 border-neutral-200'>
            <ul className='xl:flex xl:space-x-20 space-y-2 xl:space-y-0 text-left px-5 py-5 xl:py-0 md:px-10 xl:h-fit h-screen text-slate-600 font-bold'>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='/therapist'>Find a Therapist</Link></li>
                <li><Link to="/Appointment">Appointments</Link></li>
                <li><a href="">Library</a></li>
                <li><a href="">Complaint & Feedback</a></li>
                <li className='p-3 xl:p-0'><a href="" className='bg-[#17A39C] p-2 px-5 rounded text-white font-semibold'>About Us</a></li>
            </ul>
        </div>
            
    </nav>
  )
}

export default Patient_Navbar