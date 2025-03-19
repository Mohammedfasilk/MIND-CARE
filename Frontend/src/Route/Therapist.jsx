import React from 'react'
import {Route, Routes } from 'react-router-dom'
import Home from '../Pages/Therapist/Home'
import Navbar from '../Component/Therapist/Navbar'
import ManageBooking from '../Pages/Therapist/ManageBooking'
import DailySchedules from '../Pages/Therapist/DailySchedules'

function Therapist() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Booking' element={<ManageBooking/>}/>
      <Route path='/Schedules' element={<DailySchedules/>}/>
    </Routes>
    </>
  )
}

export default Therapist