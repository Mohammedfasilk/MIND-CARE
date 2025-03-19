import React, { useEffect, useState } from "react";
import TherapistCard from "../../Component/Patient/TherapistCard";

function Find_Therapist() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
    const therapists = [{name:'Therapist 1',location:'vailathur',License:'Mental health counsiler'},
      {name:'Therapist 2',location:'tirur',License:'Mental health counsiler'}]
    
    
    const [value,setValue] = useState(false)
  return (
    <main className="flex pt-[70px] h-screen" onMouseEnter={()=>setValue(true)} onMouseLeave={()=>setValue(false)}>
      <section className="px-20 w-1/3 hidden xl:flex flex-col justify-center border-r-2">
        <div className="flex">
          <div
            className="w-28 h-28 rounded-full border-2 border-stone-200 bg-cover  bg-center"

            style={{backgroundImage:`url("/src/assets/Patient/pexels-david-garrison-1128051-2128807.jpg")`}}
          ></div>
          <div
            className={`w-28 h-28 rounded-full border-2 border-stone-200 bg-cover bg-center absolute transition-all duration-500 ease-in-out ${value ? 'ml-20' : 'ml-0'}`}
            style={{backgroundImage:`url("/src/assets/Patient/pexels-heitorverdifotos-2169434.jpg")`}}
          ></div>
          <div
            className={`w-28 h-28 rounded-full border-2 border-stone-200 bg-cover bg-center absolute transition-all duration-500 ease-in-out ${value ? 'ml-40' : 'ml-0'}`}
            style={{backgroundImage:`url("/src/assets/Patient/pexels-italo-melo-881954-2379005.jpg")`}}
          ></div>
        </div>
        <div className="w-[20rem] space-y-3 py-5 text-lg font-sans">
          <h1 className="text-2xl font-bold">Restore Your Mental Health</h1>
          <p><i className="bi bi-check-lg text-green-600"></i> Speak with a specialist</p>
          <p><i className="bi bi-check-lg text-green-600"></i> Get wellness check-ins</p>
          <p><i className="bi bi-check-lg text-green-600"></i> Book professional support</p>
        </div>
      </section>
      <section className="w-full overflow-scroll scrollbar-hide pt-5">
        <div className="p-5 flex flex-col sm:flex-row items-center justify-center">
          <input
            className="w-full sm:w-[75%] p-1 sm:p-2 rounded border border-neutral-400 placeholder:italic placeholder:font-thin"
            type="text"
            placeholder="Search for therapist"
          />
          <button className="md:ml-2 bg-[#17A39C] mt-2 sm:mt-0 p-1 sm:p-2 px-5 rounded text-white font-semibold">
            Search
          </button>
        </div>
        <div className=" flex justify-center sm:justify-between p-3 bg-[#17A39C]">
          <div className="sm:flex justify-evenly w-[50%] hidden ">
            <a className="cursor-pointer bg-white px-5 py-1 rounded">Male</a>
            <a className="cursor-pointer bg-white px-5 py-1 rounded">Female</a>
            <a className="cursor-pointer bg-white px-5 py-1 rounded">
              Near Location
            </a>
          </div>
          <a className="cursor-pointer bg-white px-5 py-1 rounded">
            All Filters
          </a>
        </div>
        <div className="flex flex-col  items-center min-h-screen max-h-fit w-full px-2  sm:px-10 bg-gray-100 py-16">
          {
            therapists.map((obj,index)=> <TherapistCard key={index} obj={obj} />)

          }
        </div>
      </section>
    </main>
  );
}

export default Find_Therapist;
