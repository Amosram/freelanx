import React, {useState} from 'react'
import { MdClose } from "react-icons/md";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login")
  const [data, setData] = useState({
      name:"",
      email:"",
      password:""
  })

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data, [name]:value}))
}

  return (
    <section className='border-t flex items-center justify-center px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <form className='border shadow-lg w-full sm:max-w-[30vw] mx-4 px-6 py-6'>
        <div className='flex items-center justify-center mb-6'>
            <h2 className='text-xl font-medium'>{currentState}</h2>
        </div>
        <div className='flex flex-col gap-3'>
            {currentState==="Login"? <></>:<input type='text' placeholder='Your name' required name='name' className='px-2 py-[6px] w-full border outline-none bg-gray-50' onChange={onChangeHandler} value={data.name}/>}
            <input type='email' placeholder='Your email' required name='email' onChange={onChangeHandler}  value={data.email} className='px-2 py-[6px] w-full border outline-none bg-gray-50'/>
            <input type='password' placeholder='password' required name='password' onChange={onChangeHandler} value={data.password} className='px-2 py-[6px] w-full border outline-none bg-gray-50'/>
        </div>
        <button type='submit' className='bg-grad text-gray-50 mt-3 font-medium w-full py-[6px] mb-3'>{currentState==="Sign Up" ?"Create Account":"Login"}</button>
        {currentState === 'Sign Up' ? 
            <div className='flex items-start gap-2 mb-3'>
              <input type='checkbox' required className='border outline-none mt-[4px] cursor-pointern bg-gray-50'/>
              <p className='text-sm'>By continuing, I agree to the Terms of use and privacy poilcy</p>
            </div>:
            null
        }
      
        {currentState==="Login"?
            <p>Don't have an account? <span onClick={()=>setCurrentState('Sign Up')} className='text-slate-800 cursor-pointer'>Register </span></p>
            :<p>Already have an account? <span onClick={()=>setCurrentState('Login')}className='text-slate-800 cursor-pointer'>Login </span></p>}
      </form>
    </section>
  )
}

export default Login