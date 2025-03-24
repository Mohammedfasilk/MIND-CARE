import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Patient_Navbar() {
  const location = useLocation();
  const navigate =useNavigate();
  const [toggle, setToggle] = useState(false);

  const MenuToggle = () => {
    setToggle((prev) => !prev);
  };

  const handleClick = () => setToggle(false);

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="flex justify-between xl:items-center xl:space-x-20 w-full xl:px-16 py-4 border-b fixed bg-white z-10">
      <div className="flex px-5 items-center">
        <h1 onClick={()=>navigate('/')} className="text-2xl sm:text-3xl font-extrabold text-blue-950 cursor-pointer">
          MindCare
        </h1>
      </div>

      
      <div
        className={`xl:flex absolute xl:static xl:max-h-full ease-linear duration-300 mt-10 xl:mt-0 right-0 items-center rounded-b-xl bg-white/95 py-2 xl:py-2 xl:border-b-0 border-neutral-200 ${
          toggle ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className={`xl:flex xl:items-center xl:space-x-16 space-y-2 xl:space-y-0 text-left px-5 py-5 xl:py-0 md:px-10 text-slate-600 font-bold ease-linear duration-300 ${toggle ? 'opacity-100' :'opacity-0'}`}>
          {[
            { name: "Home", path: "/user/Dashboard" },
            { name: "Find a Therapist", path: "/user/therapist" },
            { name: "Appointments", path: "/user/Appointment" },
            { name: "Library", path: "/user/Library" },
            { name: "Complaint & Feedback", path: "/user/Feedback" },
          ].map(({ name, path }) => (
            <li key={path}>
              <Link
                onClick={handleClick}
                to={path}
                className={`pb-1 ${
                  isActive(path) && "border-b-2 border-gray-300 text-black"
                }`}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      
      <div className="flex items-center">
        <Link to="/user/Profile">
          <i className="bi bi-person-circle text-2xl"></i>
        </Link>
        <div className="xl:hidden px-5">
          <button
            onClick={MenuToggle}
            className="bg-[#17A39C] text-white rounded py-2 px-4"
            aria-expanded={toggle}
            aria-label="Toggle navigation"
          >
            <i className={`bi ${toggle ? "bi-x-lg" : "bi-list"}`}></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Patient_Navbar;