import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {jobs} from '../assets/assets'
import { IoCalendarOutline } from "react-icons/io5";
import { PiCalendarXThin } from "react-icons/pi";



const SingleJob = () => {
  const {jobId} = useParams();
  const [jobData, setJobData] = useState(false);

  const fetchJobData = async () => {
    jobs.map((job) => {
      if (job._id === Number(jobId)) {
        setJobData(job);
      };
    })
  };
  
  useEffect(() => {
    fetchJobData();
  }, [jobId])

  return jobData ? (
    <div className='px-8 min-h-[60vh]'>
        <div className='min-h-[50vh] border mt-4 shadow-md px-4 py-4'>
          <div>
            <p className='text-lg md:text-2xl font-medium text-gd-2 mb-4'>{jobData.title}</p>
            <p className='flex gap-8 text-gray-600 mb-3'>
              <span className='flex items-center gap-2'>
                <IoCalendarOutline className='text-gd'/>
                Posted: {jobData.date}</span>
              <span className='flex items-center gap-2'>
                <PiCalendarXThin className='text-red-700'/>
                Deadline: {jobData.date}</span>
            </p>
            <hr/>
          </div>

          <div className='mt-5 flex flex-col gap-4'>
            <p className='grid grid-cols-2 text-gray-600 w-full md:w-[30%]'>
              <span>Job Type</span>
              <span className='text-slate-800'>{jobData.remote}</span>
            </p>
            <p className='grid grid-cols-2 text-gray-600 w-full md:w-[30%]' >
              <span>Qualification</span>
              <span className='text-slate-800'>{jobData.quallification}</span>
            </p>
            <p className='grid grid-cols-2 text-gray-600 w-full md:w-[30%]' >
              <span>Experience</span>
              <span className='text-slate-800'>{jobData.career_level}</span>
            </p>
            <p className='grid grid-cols-2 text-gray-600 w-full md:w-[30%]' >
              <span>Location</span>
              <span className='text-slate-800'>{jobData.location}</span>
            </p>
            <p className='grid grid-cols-2 text-gray-600 w-full md:w-[30%]' >
              <span>Salary</span>
              <span className='text-slate-800'>${jobData.salary} hr</span>
            </p>
          </div>

          <div className='mt-8 flex flex-col gap-8'>
            <div>
              <h1 className='text-lg font-medium text-slate-900 mb-2'>Who we are</h1>
              <p className='text-slate-700'>{jobData.briefDescription}</p>
            </div>
            <div>
              <h1 className='text-lg font-medium text-slate-900 mb-2'>Responsibilities</h1>
              <ul className='ml-4'>
                {
                  jobData.responsibilities.map((res, index)=> (
                    <li className='text-slate-700' key={index}>{res}</li>
                  ))
                }
              </ul>
            </div>
          </div>

          <div className='bg-grad px-6 py-[5px] w-fit mt-10 hover:cursor-pointer shadow-md rounded-[30px] text-gray-100'>
            <p>Apply Now</p>
          </div>
          
        </div>
    </div>
  ): (
    <div className="opacity-0"></div>
  );
};

export default SingleJob