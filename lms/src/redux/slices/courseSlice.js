import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance  from "../../config/axiosInstance"
const initialState={
     courseList:[]
}

 
   
export const getAllCourses=createAsyncThunk('/course/getAllCourses',async()=>{
  try{
       const response= axiosInstance.get('/courses/')
       toast.promise(response,{
        loading:"Loading Personalised Courses for You",
         success:"Courses Fetched Succesfully",
         error:"Sorry ! Failed to load the courses Please try again.."
       })
       return (await response).data.courses;
  } 
  catch(error){
    toast.error(error?.response?.data?.message);
     console.log(error)
  }
})


const courseSlice=createSlice({
    name:"course",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
                   builder.addCase(getAllCourses.fulfilled,(state,action)=>{
                    if(action?.payload)
                    {
                      state.courseList=[...action.payload];
                      
                    }
                    console.log(state.courseList)
                   })
    }
    
});

export default courseSlice.reducer;