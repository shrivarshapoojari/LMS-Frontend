import React, { useEffect } from 'react'
import HomeLayout from '../../layouts/HomeLayout'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { getUserData } from '../../redux/slices/authSlice'
const Profile = () => {
    const dispatch=useDispatch();
    const userData=useSelector((state)=>state?.auth?.data)
        
    async function loadUser(){
      await dispatch(getUserData())
    }
   
    useEffect(()=>{

      loadUser();
    },[])
    
  return (
     <HomeLayout>
        <div className='min-h-[90vh] flex items-center justify-center' >
            <div className='my-10 flex flex-col gap-4 rounded-lg p-4 text-white w-96 shadow-[0_0_100px_purple]'>
               <img src={userData?.avatar?.secure_url} alt="User" 
               
               className='w-40 m-auto rounded-full border border-purple-500 '/>
                 <h3 className='text-xl font-semibold text-center capitalize'>
              {userData?.fullname}
            </h3>
                  <div className='grid grid-cols-2'>
                      <p>Email: </p> <p>{userData?.email}</p>
                      <p>Role: </p> <p> {userData?.role}</p>
                      <p>Subscription: </p> <p> {userData?.subscription?.status==="active"?"ACrive":"Expired"}</p>
                       
                  </div>
                  
                  <div className='flex items-center justify-between gap-2'>
                     <Link to='/user/changepassword' className='w-1/2 bg-purple-600 hover:bg-purple-500 text-center px-2 py-2 rounded-sm font-semibold cursor-pointer'>
                        Change Password
                     </Link>
                     <Link to='/user/editprofile' className='w-1/2 bg-purple-600 hover:bg-purple-500 text-center px-2 py-2 rounded-sm font-semibold cursor-pointer'>
                        Edit Profile
                     </Link>
                  </div>
                       {userData?.subscription?.status=='active' && (
                       <button className=' bg-purple-600 hover:bg-purple-500 text-center px-2 py-2 rounded-sm font-semibold cursor-pointer'>
                        Cancel Subscription

                       </button>)} 
            </div>
          
        </div>
     </HomeLayout>
  )
}

export default Profile
