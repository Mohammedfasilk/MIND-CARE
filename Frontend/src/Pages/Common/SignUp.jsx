import React, { useEffect, useState } from 'react'

import { Link, useNavigate } from 'react-router-dom'
import Signup from '../../Component/Common/Signup';
import TherapistSignup from '../../Component/Common/TherapistSignup';

function SignUp() {
  const [istherpist,setIstherapist] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); 
  
  const handleUser = ()=>{
    setIstherapist(!istherpist)
    console.log(istherpist);
  }
  
  
  return (
    <main className='pt-20'>
        <div className='text-center'>
            <h1 className='text-4xl'>
                Sign Up
            </h1>
            <p className='mt-5'>
                Already have an account? <Link className='text-blue-600 underline' to={'/login'}>Log In</Link>
            </p>
        </div>
        {istherpist ? <TherapistSignup handleUser={handleUser}/> :  <Signup handleUser={handleUser}/>}
      
       
    </main>
  )
}

export default SignUp