import React from 'react'
import HomeLayout from '../../layouts/HomeLayout'
import { useDispatch, useSelector } from 'react-redux'

const Profile = () => {
    const dispatch=useDispatch();
    const userData=useSelector((state)=>state?.auth?.data)
  return (
     <HomeLayout>
        <div className='min-h-[90vh] flex items-center justify-center' >
            <div className='my-10 flex flex-col gap-4 rounded-lg p-4 text-white w-96 shadow-[0_0_100px_black]'>

            </div>
        </div>
     </HomeLayout>
  )
}

export default Profile
