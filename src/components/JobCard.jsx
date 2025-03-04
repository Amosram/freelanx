import React from 'react'
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";


const JobCard = ({id, title, remote, site, date, location, quallification, career_level, briefDescription, salary, responsibilities}) => {
  return (
    <div>
        <Link to={`/job/${id}`}>
            <div className='border shadow-md p-4 text-slate-950 jobCard'>
                <div className='flex justify-between mb-4'>
                    <p className='text-gray-700'>{date}</p>
                    <p className='text-green-500'>New</p>
                </div>

                <div className='mb-3'>
                    <p className='text-lg md:text-xl font-medium text-gd-2 mb-4'>{title}</p>
                    <div className='flex gap-4'>
                        <p className='text-sm md:text-normal bg-gray-200 px-4 py-[3px] flex items-center justify-center md:px-6 md:py-2 rounded-md'>{remote}</p>
                    </div>
                </div>

                <div className='flex items-center gap-2 text-gray-800'>
                    <FaLocationDot/>
                    <p>{location}</p>
                </div>

            </div>
        </Link>
    </div>  
  )
}

export default JobCard