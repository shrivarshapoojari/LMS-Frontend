import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance  from "../../config/axiosInstance"
const initialState={
     courseList:[]
}

 
   
export const getAllCourses=createAsyncThunk('/course/getAllCourses',async(data)=>{
  try{
       const response=  axiosInstance.get('/courses/logout',data)
       toast.promise(response,{
        loading:"Loading Personalised Courses for You",
         success:(data)=>{
            return data?.data?.message
         },
         error:"Sorry ! Failed to load the courses Please try again.."
       })
       return await response;
  } 
  catch(error){
    toast.error(error?.response?.data?.message);
     console.log(error)
  }
})


const courseSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{},
    
});

export default courseSlice.reducer;