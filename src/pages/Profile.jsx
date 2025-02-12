import React from 'react'
import { HiUserCircle } from "react-icons/hi";


const Profile = () => {
  return (
    <div className='min-h-[60vh] md:min-h-[100vh] px-8 py-8'>
        <div className='border shadow-md min-h-[50vh] px-4 grid grid-cols-1 md:grid-cols-[200px_minmax(900px,_1fr)_100px]'>
            <div className='md:border-r-2 py-4 px-4'>
                <div className='flex flex-col items-center'>
                    <HiUserCircle className='text-8xl text-gray-500'/>
                    <p>Amos Rama</p>
                </div>
                <p className='cursor-pointer bg-grad text-gray-50 mt-3 font-medium w-full py-1 px-2 text-center rounded-md mb-3'>Edit Profile</p>
            </div>
            <div className='px-8 py-4'> 
                <div className='flex flex-col gap-4'>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>Occupation</p>
                        <p className='text-slate-900'>Software Engineer</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>About</p>
                        <p className='text-slate-900 w-[50%] lg:w-full'>
                        Passionate and results-driven software engineer with over 2 years of experience in designing, developing, and deploying scalable and efficient software solutions.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>Skills</p>
                        <ul className='grid grid-cols-3 gap-1 text-slate-900 list-none w-[50%]'>
                            <li>React</li>
                            <li>Python</li>
                            <li>Java</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>React</li>
                            <li>React</li>
                            <li>React</li>
                            
                        </ul>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>Experience</p>
                        <p className='text-slate-900'>Freelance</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>Insitution</p>
                        <p className='text-slate-900'>Zetech University</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>Degree</p>
                        <p className='text-slate-900'>Bsc Computer Science</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile