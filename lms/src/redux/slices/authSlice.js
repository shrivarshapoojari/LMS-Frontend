import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import toast from "react-hot-toast";
import axiosInstance  from "../../config/axiosInstance"
const initialState={
    isLoggedIn:localStorage.getItem("isLoggedIn") || false,
    role:localStorage.getItem("role") || "",
    data:localStorage.getItem("data") || {}
}

export const createAccount=createAsyncThunk('/auth/signup',async(data)=>{
  try{
       const response=  axiosInstance.post('/user/register',data)
       toast.promise(response,{
        loading:"Please hang on ! We are working on creating your account",
         success:(data)=>{
            return data?.data?.message
         },
         error:"Sorry ! Account creation failed.."
       })
       return await response;
  } 
  catch(error){
    toast.error(error?.response?.data?.message);
     console.log(error)
  }
})


const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{}
});

export default authSlice.reducer;