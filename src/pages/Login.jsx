import React, {useContext, useEffect, useState} from 'react'
import { jobContext } from '../context/JobContext';
import axios from "axios";
import {toast} from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const {token, setToken, navigate, serverUrl} = useContext(jobContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [categories, setCategories] = useState("");

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      if (currentState === "Sign Up") {
        const categoriesArray = categories.split(',').map(cat => cat.trim());
        const response = await axios.post(serverUrl + "/api/user/register", {name, password, email, categories:categoriesArray});
        if (response.data.success) {
          setToken(response.data.token)
          localStorage.setItem("token", response.data.token)
          toast.success(response.data.message);
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(serverUrl + "/api/user/login", {email, password});
        if (response.data.success) {
          toast.success(response.data.message);
          setToken(response.data.token)
          localStorage.setItem("token", response.data.token)
          localStorage.setItem("name", response.data.name)
          localStorage.setItem('categories', JSON.stringify(categories));
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)   
    }
  }

  useEffect(()=> {
    if (token) {
      navigate("/")
    }
  }, [token])

  return (
    <section className='fixed bg-white w-full top-0 border-t flex items-center justify-center px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <form onSubmit={onSubmitHandler}  className='border shadow-lg w-full sm:max-w-[30vw] mx-4 px-6 py-6'>
        <div className='flex items-center justify-center mb-6'>
            <h2 className='text-xl font-medium'>{currentState}</h2>
        </div>
        <div className='flex flex-col gap-3'>
            { currentState === "Login"?
           
            <></>:<><input type='text' placeholder='Your name' required name='name' className='px-2 py-[6px] w-full border outline-none bg-gray-50' onChange={(e)=>setName(e.target.value)} value={name}/>
            <input type='text' placeholder='e.g IT, Business' required onChange={(e)=>setCategories(e.target.value)} value={categories}  className='px-2 py-[6px] w-full border outline-none bg-gray-50'/></>
            }

            <input type='email' placeholder='Your email' required onChange={(e)=>setEmail(e.target.value)} value={email}  className='px-2 py-[6px] w-full border outline-none bg-gray-50'/>

            <input type='password' placeholder='password' required name='password' onChange={(e)=>setPassword(e.target.value)} value={password}className='px-2 py-[6px] w-full border outline-none bg-gray-50'/>
        </div>
        {currentState === 'Sign Up' ? 
            <div className='flex items-start gap-2 my-3'>
              <input type='checkbox' required className='border outline-none mt-[4px] cursor-pointern bg-gray-50'/>
              <p className='text-sm'>By continuing, I agree to the Terms of use and privacy poilcy</p>
            </div>:
            null
        }
        <button type='submit' className='bg-grad text-gray-50 mt-3 font-medium w-full py-[6px] mb-3'>{currentState==="Sign Up" ?"Create Account":"Login"}</button>
      
      
        {currentState==="Login"?
            <p>Don't have an account? <span onClick={()=>setCurrentState('Sign Up')} className='text-slate-800 cursor-pointer'>Register </span></p>
            :<p>Already have an account? <span onClick={()=>setCurrentState('Login')}className='text-slate-800 cursor-pointer'>Login </span></p>}
      </form>
    </section>
  )
}

export default Login