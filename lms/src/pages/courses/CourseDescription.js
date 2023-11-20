import React from 'react'
import HomeLayout from '../../layouts/HomeLayout'
import { useLocation, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
const CourseDescription = () => {

    const {state}=useLocation() // acces the data sent by course card
    const navigate=useNavigate();

    const {role , data }=useSelector((state)=>state.auth)

  return (
    <HomeLayout>
          <div className='min-h-[90vh] pt-12 px-20 flex flex-col items-center justify-center text-white'>
           <div className='grid grid-rows-2 gap-10 py-10 relative sm:grid-cols-2 px-5'>
                <div className='space-y-5  px-10 py-5'>
                    <img
                        src={state?.thumbnail?.secure_url}
                        alt="thumbnail"
                        className='w-full h-64' />
                        <div className='space-y-4'>
                            <div className='flex flex-col ibtems-center justify-between text-xl'>
                                <p className='font-semibold'>
                                    <span className='font-bold text-yellow-500'> Total Duration:{ " "} </span>{state?.numberOfLectures}
                                </p>
                                <p className='font-semibold'>
                                    <span className='font-bold text-yellow-500'> Mentor:{ " "} </span>{state?.createdBy}
                                </p>
                            </div>
                            {(role=='ADMIN' || data?.subscription?.status=='active') ?
                               ( <button 
                                        className='text-yellow-500 text-xl rounded-md border border-current bg-transparent px-5 py-2 w-full hover:bg-yellow-500 hover:text-white hover:font-bold'
                                        onClick={()=>navigate('/course/displaylectures',{state:{...data}})}
                                        
                                        >
                                            
                                            Start Learning
                                        </button>):(
                               <button 
                                    className='text-yellow-500 text-xl rounded-md border border-current bg-transparent px-5 py-2 w-full hover:bg-yellow-500 hover:text-white hover:font-bold'
                                         onClick={()=>navigate('/checkout')}>
                                     
                                         Subscribe
                                </button>)
                            }
                        </div>
                </div>
                 {/* Right Side of grid*/}
                 <div className='space-y-2 text-xl'>
                  <h1 className='text-3xl font-bold text-yellow-500 text-center mb-5'>
                    {state?.title}
                  </h1>
                  <p className='text-yellow-400 inline'>
                    Course Overview: {" "}
                  </p>
                  <p className='inline'>
                    {state?.description}
                  </p>
                 </div>
           </div>
          </div>
    </HomeLayout>
  )
}

export default CourseDescription
