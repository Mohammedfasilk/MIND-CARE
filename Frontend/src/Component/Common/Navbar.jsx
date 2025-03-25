import React from "react";
import {useNavigate } from "react-router-dom";

function Navbar() {


  const navigate = useNavigate()
  return (
    <nav className="flex justify-between xl:items-center xl:space-x-20 w-full xl:px-16 py-4 border-b fixed bg-white z-10">
      <div className="flex px-5 items-center">
        <h1 onClick={()=>navigate('/')} className="text-2xl sm:text-3xl font-extrabold text-blue-950 cursor-pointer">
          MindCare
        </h1>
      </div>
      <div className="space-x-5">
        <button onClick={ ()=> navigate('/signup')} className="font-bold border-2 border-black rounded-md px-5 py-1 hover:bg-black hover:text-white duration-300">SignUp</button>
        <button onClick={()=>navigate('/login')} className="font-bold border-2 border-transparent rounded-md px-5 py-1 hover:bg-gray-200 duration-300 ">Login</button>
      </div>
    </nav>
  );
}

export default Navbar;
