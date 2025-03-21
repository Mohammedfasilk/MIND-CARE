import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Common/Home'
import Navbar from '../Component/Common/Navbar'
import SignUp from '../Pages/Common/SignUp'
import Patient from './Patient'
import Footer from '../Component/Common/Footer'

function Common() {
  return (
   <>
   
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/signup' element={<SignUp/>}/>
    </Routes>
    <Footer/>
   
   </>
  )
}

export default Common