import React from 'react';
import {Link} from 'react-router-dom';
import { LuCircleCheckBig } from "react-icons/lu";
import { FaAngleLeft } from "react-icons/fa6";



const SuccessPage = () => {
  return (
    <section className='fixed top-0 left-0 right-0 w-full bg-white flex items-center justify-center'>
        <div className='flex flex-col items-center gap-4'>
            <div className='flex flex-col md:flex-row items-center gap-1 md:gap-3'>
                <LuCircleCheckBig className='text-5xl text-green-500'/>
                <p className='text-2xl md:text-3xl text-gd-2 px-5 md:px-0 text-center'>Application submitted successifully</p>
            </div>
  
            <Link to='/' className='flex items-center gap-1 bg-grad text-gray-50 px-4 py-1 rounded-2xl'>
                <FaAngleLeft/>
                <p>Back</p>
            </Link>
        </div>
    </section>
  )
}

export default SuccessPage