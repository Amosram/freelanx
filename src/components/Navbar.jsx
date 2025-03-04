import React, { useContext, useEffect, useState } from 'react'
import { NavLink,Link } from 'react-router-dom'
import Button from './Button'
import { HiOutlineBars3 } from "react-icons/hi2";
import { IoClose } from "react-icons/io5";
import { RiUser4Fill } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa6";
import { MdLogout } from "react-icons/md";
import { jobContext } from '../context/JobContext';
import axios from 'axios';
import { toast } from 'react-toastify'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [profile, setProfile] = useState(false)
  const {token, setToken, navigate, isAuthenticated, serverUrl, user} = useContext(jobContext);
  const username = localStorage.getItem('name');

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null)
    navigate("/login")
  }

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
                {
                  isAuthenticated() ?
                  <NavLink to='/user-jobs'>My Jobs</NavLink>
                  :
                  null

                }
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact</NavLink>
            </div>


            <div className='flex items-center gap-2'>
              {
                isAuthenticated() ? (
                  <div className='relative'>
                    <HiUserCircle onClick={toggleProfile} className='text-[25px] md:text-[30px] text-gray-500 cursor-pointer p-0 border shadow-md rounded-full'/>

                    {
                      profile &&
                      <div className='bg-white border shadow-md absolute rounded-md top-full right-0 w-40 flex flex-col gap-2 mt-2'>
                      
                      <p className='px-4 flex gap-2 items-center text-sm border-b-[1px] shadow-sm rounded-md py-2 mb-2'>
                        <span className='border flex items-center justify-center p-2 bg-grad text-gray-50 w-6 h-6 shadow-sm rounded-full font-medium'>{username[0]}</span>
                        {username}
                      </p>  
                        
                      <Link to='/profile' onClick={toggleProfile} className='flex font-medium items-center text-sm gap-1 px-4 py-1 hover:bg-purple-100 transition-all duration-100 ease-out'>
                        <span>Manage Profile</span>
                        <FaAngleRight className='text-[11px]'/>
                      </Link>
                      <Link to='/my-applications' onClick={toggleProfile} className='flex font-medium items-center text-sm gap-1 px-4 py-1 hover:bg-purple-100 transition-all duration-100 ease-out'>
                        <span>My Applications</span>
                        <FaAngleRight className='text-[11px]'/>
                      </Link>
                      <p onClick={toggleProfile} className='flex items-center font-medium gap-1 cursor-pointer text-sm px-4 py-1 hover:bg-purple-100 transition-all duration-100 ease-out'>
                        <MdLogout/>
                        <span onClick={logout}>Logout</span>
                      </p>
                  </div>
                  }
            
                  </div>
                ) : (
                  <NavLink className='hidden md:flex' to='/login'>
                    <Button buttonText='Login'/>
                  </NavLink>
                )
              }
          
            

              <HiOutlineBars3 onClick={toggleMenu} className='text-2xl rounded-sm font-medium hover:cursor-pointer md:hidden border'/>
            </div>

            {
              isOpen &&
           
              <div className=' flex flex-col justify-between tr md:hidden fixed top-0 left-0 bg-white h-full w-full px-4 pt-4'>
                <div className='flex flex-col text-lg gap-4'>
                  <NavLink onClick={toggleMenu} to='/'>Home</NavLink>
                  {
                  isAuthenticated() ?
                  <NavLink onClick={toggleMenu} to='/user-jobs'>My Jobs</NavLink>
                  :
                  null
                    
                  }
                  <NavLink onClick={toggleMenu} to='/about'>About</NavLink>
                  <NavLink onClick={toggleMenu} to='/contact'>Contact</NavLink>
                  {
                    isAuthenticated() ? ''
                    :
                    <NavLink onClick={toggleMenu} className=' md:hidden' to='/login'>
                      <div className='bg-grad px-6 py-[5px] text-center hover:cursor-pointer shadow-md rounded-[30px] text-gray-100'>
                        <p>Login</p>
                      </div>
                    </NavLink>
                  }
                
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