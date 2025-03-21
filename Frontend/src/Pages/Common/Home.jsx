import React from 'react'
import Home_img from '../../assets/Common/496154d3aa8d8360596bd8e1cc84a74c-senior-woman-online-therapy-tablet.jpg'
import consult_img from '../../assets/Common/Gemini_Generated_Image_8axt8axt8axt8axt.jpeg'
import SessionCard from '../../Component/Common/SessionCard'
import {motion} from 'framer-motion'


function Home() {
  return (
    <main>
        <section className='h-screen w-full  bg-cover bg-center flex items-center justify-center sm:justify-start px-2 sm:px-20' style={{backgroundImage:`url(${Home_img}`}}>
            <div className='bg-black/60 py-10 px-5 sm:px-20 rounded-xl text-white w-fit'>
                <div>
                    <h1 className='text-center text-2xl sm:text-3xl md:text-5xl  font-bold'>
                        Talk. Resolve. Heal.
                    </h1>
                </div>
                <div className='py-4 sm:py-8 space-y-2 sm:text-lg'>
                    <p>Online Counselling Therapy With Top Psychologists.</p>
                    <p>Anytime, Anywhere, Any device.</p>
                </div>
                <div>
                    <button className='border-2 border-white p-2 rounded-md w-full font-bold hover:text-black hover:bg-white duration-500'>Get Started</button>
                </div>
            </div>
        </section>

        <section className='p-3 sm:p-10'>
            <div className='py-10'>
                <h1 className='text-2xl sm:text-4xl text-center font-bold text-blue-950'>
                    Choose Help.Not Suffering.
                </h1>
            </div>

            <div className='lg:flex py-8'>
                <div className='w-full flex justify-center'>
                    <img className=' sm:h-[500px] rounded-lg' src={consult_img} alt="choose help" />
                </div>
                <div className=' mt-10 lg:mt-0 text-center lg:text-left'>
                    <div className='flex flex-col items-center md:px-8 space-y-5'>
                        <h2 className='text-xl sm:text-3xl font-semibold w-3/4'>
                        Counselling Therapy Sessions With Licensed & Verified Experts
                        </h2>
                        <p className='w-3/4'>
                        Highly qualified team of some of the best names in psychology who deliver improved well-being to you. Carefully vetted through a rigorous selection process. Trained and experienced in all psychotherapy techniques.
                        </p>
                        <div className='grid  sm:grid-cols-3 py-8 gap-10'>  
                            <SessionCard title={'Video Session'} icon={'bi bi-webcam'} />
                            <SessionCard title={'Audio Session'} icon={'bi bi-mic'} />
                            <SessionCard title={'Chat Session'} icon={'bi bi-chat-left-dots'}/>
                        </div>
                        <p className='font-bold py-5 sm:py-10'>100% Private & Secure Platform</p>
                    </div>
                </div>
            </div>
        </section>
        <section>
            
        </section>
    </main>
  )
}

export default Home