import React, { useEffect, useState } from 'react'
import BookingDate from '../../Component/Patient/BookingDate'
import BookingTime from '../../Component/Patient/BookingTime'

function PatientBooking() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

   const [dates, setDates] = useState([]);
    const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  
    useEffect(() => {
      const today = new Date();
      const newDates = [];
  
      for (let i = 0; i <= 6; i++) {
        const getday = new Date();
        getday.setDate(today.getDate() + i);
        const futureDate = today.getDate() + i;
  
        newDates.push({
          day: weekday[getday.getDay()],
          date: futureDate,
        });
      }
  
      setDates(newDates);
    }, []);
   
    
  return (
    <main className='pt-16'>
        <section className='bg-center bg-cove' >
            <div className='  py-5'>
            <div className=' bg-cover bg-center'
            style={{backgroundImage:'url("/src/assets/Patient/pexels-shvets-production-9052846.jpg")'}}>
                <div className='flex md:justify-evenly p-3 sm:p-10 bg-black/60 overflow-scroll xl:scrollbar-hide'>
              
                { dates.map((date , index)=>
                  <BookingDate day={date.day} date={date.date}/>
                )}
                </div>
            </div>  
            <div className='flex py-5 flex-col items-center space-y-5'>
                <BookingTime/>
                <BookingTime/>
                <BookingTime/>

            </div>
            </div>
        </section>
    </main>
  )
}

export default PatientBooking