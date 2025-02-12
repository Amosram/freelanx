import React, { useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import Button from './Button'
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { RiUser4Fill } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";



const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [profile, setProfile] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const toggleProfile = () => {
    setProfile(!profile)
  }

  return (
    <div>
        <header className=' flex items-center justify-between py-3 px-4 md:px-8 text-md font-normal shadow-md text-gray-950 '>
        <Link className='font-bold text-xl' to='/'>freelanx.</Link>

            <div className='hidden md:flex gap-8'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>


            <div className='flex items-center gap-2'>
              <div className='relative'>
                <HiUserCircle onClick={toggleProfile} className='text-[27px] text-gray-500 cursor-pointer'/>

                {
                  profile &&
                  <div className='bg-white border shadow-md absolute rounded-md top-full right-0 w-40 flex flex-col gap-2'>
                    <p className='text-center text-sm border-b-[1px] shadow-sm rounded-md py-2 mb-2'>Amos Rama</p>
                    {/* <hr className='mb-2'/> */}
                    <Link to='/profile' onClick={toggleProfile} className='flex items-center gap-1 px-4'>
                      <span>Profile</span>
                      <FaAngleRight className='text-[12px]'/>
                    </Link>
                    <p onClick={toggleProfile} className='flex items-center gap-1 cursor-pointer px-4 mb-4'>
                      <MdLogout/>
                      <span>Logout</span>
                    </p>
                  </div>
                }
          
              </div>
              
              <NavLink className='hidden md:flex' to='/login'>
                <Button buttonText='Login'/>
              </NavLink>

              <HiOutlineBars3 onClick={toggleMenu} className='text-xl font-medium hover:cursor-pointer md:hidden '/>
            </div>

            {
              isOpen &&
           
              <div className=' flex flex-col justify-between tr md:hidden fixed top-0 left-0 bg-white h-full w-full px-4 pt-4'>
                <div className='flex flex-col text-lg gap-4'>
                  <NavLink onClick={toggleMenu} to='/'>Home</NavLink>
                  <NavLink onClick={toggleMenu} to='/about'>About</NavLink>
                  <NavLink onClick={toggleMenu} to='/contact'>Contact</NavLink>
                  <NavLink onClick={toggleMenu} className=' md:hidden' to='/login'>
                    <div className='bg-grad px-6 py-[5px] text-center hover:cursor-pointer shadow-md rounded-[30px] text-gray-100'>
                      <p>Login</p>
                    </div>
                  </NavLink>
                </div>
        

                <p onClick={toggleMenu} className='flex items-center justify-center gap-1 mb-10 border text-lg rounded-[30px]'>
                  <IoClose/>
                  Close
                </p>
              </div>
            }
        </header>
    </div>
  )
}

export default Navbar