import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Patient_Home from '../Pages/Patient/Patient_Home'
import PatientAppointment from '../Pages/Patient/PatientAppointment'
import Patient_Navbar from '../Component/Patient/Patient_Navbar'
import Find_Therapist from '../Pages/Patient/Find_Therapist'
import PatientBooking from '../Pages/Patient/PatientBooking'
import PatientFooter from '../Component/Patient/PatientFooter'
import Library from '../Pages/Patient/Library'
import Complaints from '../Pages/Patient/Complaints'
import Profile from '../Pages/Patient/Profile'

function Patient() {
  return (
    
    <>
    
    <Patient_Navbar/>
    <Routes>
      <Route path='/Dashboard' element={<Patient_Home/>}/>
      <Route path='/therapist' element={<Find_Therapist/>}/>
      <Route path='/appointment' element={<PatientAppointment/>}/>
      <Route path='/booking' element={<PatientBooking/>}/>
      <Route path='/Library' element={<Library/>}/>
      <Route path='/Feedback' element={<Complaints/>}/>
      <Route path='/Profile' element={<Profile/>}/>
    </Routes>
    <PatientFooter/>
    
    </>
  )
}

export default Patient