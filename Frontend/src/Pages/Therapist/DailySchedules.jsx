import React from 'react'
import ScheduleCard from '../../Component/Therapist/ScheduleCard'

function DailySchedules() {

    const PatientDetails = [{name:'Mohammed Fasil k',type:'Video Call',number:'9876543210',place:'Tirur',date:'10-03-2025',time:'8:00 AM'},
        {name:'Mohammed Sahal',type:'Voice Call',number:'9876543210',place:'Randathani',date:'10-03-2025',time:'9:00 AM'},
        {name:'Al Sinan',type:'Chat',number:'9876543210',place:'Tirur',date:'10-03-2025',time:'11:00 AM'},
        {name:'Mohammed Yasir',type:'Video Call',number:'9876543210',place:'Tanur',date:'10-03-2025',time:'4:00 PM'}
    ]
  return (
    <section className='py-20 px-2 sm:px-10 bg-gray-100'>
        <div className='text-2xl sm:text-3xl font-bold text-center w-full py-5'>
            <h1>
            Schedules For Today
            </h1>
        </div>
       <div>
        {
            PatientDetails.map((value,index)=>
                <ScheduleCard name={value.name} type={value.type} number={value.number} place={value.place} date={value.date} time={value.time} />
            )
        }
       </div>
        
    </section>
  )
}

export default DailySchedules