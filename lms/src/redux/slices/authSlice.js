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
export const login=createAsyncThunk('/auth/login',async(data)=>{
  try{
       const response=  axiosInstance.post('/user/login',data)
       toast.promise(response,{
        loading:"Please hang on ! We are finding your account",
         success:(data)=>{
            return data?.data?.message
         },
         error:"Sorry ! Login Failed Please try again.."
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
    reducers:{},
    extraReducers:(builder)=>{
      builder.addCase(login.fulfilled,(state,action)=>{
        
        localStorage.setItem("data",JSON.stringify(action?.payload?.data))
        localStorage.setItem("isLoggedIn",true)
        localStorage.setItem("role",action?.payload?.data?.user?.role)
        state.isLoggedIn=true;
        state.role=action?.payload?.data?.user?.role
        state.data=action?.payload?.data?.user
      })
    }
});

export default authSlice.reducer;