import React from 'react';
import {Link} from 'react-router-dom'
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";


const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className='min-h-[20vh] w-full flex flex-col bg-black text-white rounded-t-3xl mt-5 px-8'>
        <div className='grid grid-cols-1 sm:grid-cols-2 md:flex justify-between mt-5 mb-8 gap-5'>
          <div>
            <h2 className='mb-3 text-gd-2 font-semibold text-2xl'>freelanx</h2>
            <p className='text-gray-400'>freelanx is located at Nairobi CBD at P.O BOX 0100</p>
          </div>

          <div>
            <h2 className='mb-3'>Company</h2>
            <div className='flex flex-col text-gray-400'>
              <Link className='hover:text-purple-400'>Home</Link>
              <Link className='hover:text-purple-400'>About</Link>
              <Link className='hover:text-purple-400'>Contact</Link>
              <Link className='hover:text-purple-400'>Career</Link>
            </div>
          </div>

          <div>
            <h2 className='mb-3'>Reviews</h2>
            <div className='flex gap-2 items-center'>
              <div className='flex gap-1'>
                <FaStar className='text-purple-400'/>
                <FaStar className='text-purple-400'/>
                <FaStar className='text-purple-400'/>
                <FaStar className='text-purple-400'/>
                <FaStarHalfAlt className='text-purple-400'/>
              </div>
              <p className='text-sm text-gray-300'>4.7 out of 5</p>
            </div>
          </div>
        </div>
        <p className='text-center text-gray-400 text-sm mb-3'>&copy; {currentYear} freelanx.com All Rights Reserved</p>
    </div>
  )
}

export default Footer