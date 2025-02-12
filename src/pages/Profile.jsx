import React, { useState } from 'react'
import { HiUserCircle } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa6";


const Profile = () => {
    const [isVisible, setIsVisible] = useState(true);

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const hiddenStyle = { display: 'none' };
    const visibleStyle = { display: 'block' };

  return (
    <div className='min-h-[60vh] md:min-h-[100vh] px-8 py-8'>
        <div className='border shadow-md min-h-[50vh] px-1 md:px-4 grid grid-cols-1 md:grid-cols-[200px_minmax(900px,_1fr)_100px]'>
            <div className='md:border-r-2 py-4 px-4'>
                <div className='flex flex-col items-center'>
                    <HiUserCircle className='text-8xl text-gray-500'/>
                    <p>Amos Rama</p>
                </div>
                <hr className='mb-4'/>
             
                <p className='cursor-pointer bg-grad text-gray-50 mt-3 font-medium w-full py-1 px-2 text-center rounded-md mb-3' onClick={toggleVisibility}>Edit Profile</p>
            </div>
          
            <div className='px-8 py-4 ' style={isVisible ? visibleStyle : hiddenStyle}> 
                <div className='flex flex-col gap-4 mb-6'>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>Occupation</p>
                        <p className='text-slate-900'>Software Engineer</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>About</p>
                        <p className='text-slate-900 w-full md:w-[50%] lg:w-full'>
                        Passionate and results-driven software engineer with over 2 years of experience in designing, developing, and deploying scalable and efficient software solutions.
                        </p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>Skills</p>
                        <ul className='grid grid-cols-3 gap-1 text-slate-900 list-none w-full md:w-[50%] lg:w-full'>
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
            <form className='px-8 py-4 ' style={isVisible ?  hiddenStyle : visibleStyle}> 
                <div className='flex flex-col gap-4'>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <label className='text-slate-700'>Occupation</label>
                        <input type='text' placeholder='e.g software engineer' className='text-slate-900 border px-4 py-[4px] w-full md:w-[70%]'/>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <label className='text-slate-700'>About</label>
                        <textarea className='border w-full md:w-[70%] resize-none px-4 py-[4px]' placeholder='content...' cols={8} rows={5}></textarea>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>Skills</p>
                        <select className='w-full md:w-[70%] border px-4 py-[4px]'>
                            <option>React</option>
                            <option>Java</option>
                            <option>HTML</option>
                            <option>CSS</option>
                            <option>Python</option>
                            <option>JavasCript</option>
                            <option>Django</option>
                            <option>Angular</option>
                            <option>Node.js</option>
                            <option>Express.js</option>
                            <option>Vue.js</option>
                            <option>Git & Github</option>
                            <option>PHP</option>
                        </select>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                        <label className='text-slate-700'>Experience</label>
                        <input type='text' placeholder='e.g Freelance' className='text-slate-900 border px-4 py-[4px] w-full md:w-[70%]'/>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <label className='text-slate-700'>Degree</label>
                        <input type='text' placeholder='e.g diploma' className='text-slate-900 border px-4 py-[4px] w-full md:w-[70%]'/>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <label className='text-slate-700'>Insitution</label>
                        <input type='text' placeholder='e.g zetech university' className='text-slate-900 border px-4 py-[4px] w-full md:w-[70%]'/>
                    </div>

                    <div className='flex justify-center mt-6'>
                        <p className='cursor-pointer bg-grad text-gray-50 mt-3 font-medium py-1 px-2 text-center rounded-md mb-3 w-[50%] '>Save</p>
                    </div>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Profile