import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Patient_Home from '../Pages/Patient/Patient_Home'
import PatientAppointment from '../Pages/Patient/PatientAppointment'
import Patient_Navbar from '../Component/Patient/Patient_Navbar'
import Find_Therapist from '../Pages/Patient/Find_Therapist'
import PatientBooking from '../Pages/Patient/PatientBooking'

function Patient() {
  return (
    
    <>
    <Patient_Navbar/>
    <Routes>
      <Route path='/' element={<Patient_Home/>}/>
      <Route path='/therapist' element={<Find_Therapist/>}/>
      <Route path='/appointment' element={<PatientAppointment/>}/>
      <Route path='/booking' element={<PatientBooking/>}/>
    </Routes>
    </>
  )
}

export default Patient