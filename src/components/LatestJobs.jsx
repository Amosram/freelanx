import React, { useContext, useEffect, useState } from 'react'
import JobCard from './JobCard';
import axios from 'axios'
import {toast} from 'react-toastify'
import { jobContext } from '../context/JobContext';

const LatestJobs = () => {
    const [jobList, setJobList] = useState([])
    const {serverUrl} = useContext(jobContext)

    const fetchJobs = async () => {
      try {
        const response = await axios.get(serverUrl + "/api/jobs/list");
        if (response.data.success) {
          toast.success(response.data.message)
          setJobList(response.data.allJobs)
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }

    useEffect(()=> {
        fetchJobs();
    }, [])

  return (
    <section className='px-8' id='latestJobs'>

        <div className='text-center mb-8'>
            <h1 className='text-slate-950 text-3xl font-medium'>All Latest Jobs For You</h1>
        </div>

        {
          jobList.length === 0 ? 
          <div className='flex items-center justify-center h-full mt-20'>
            <div className='loader-1'></div>
            <span className='loader-2'></span>
          </div>
          :
          <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-8'>
          {
              jobList.map((job, index) => (
                  <JobCard 
                  key={index} 
                  id={job._id} 
                  title={job.jobTitle} 
                  date={new Date(job.date).toLocaleDateString()} 
                  remote={job.jobType} 
                  site={job.site} 
                  location={job.location} 
                  qualification={job.qualification} 
                  career_level={job.career_level} 
                  salary={job.salary}
                  responsibilities={job.responsibilities}
                  briefDescription={job.briefDescription}
                  />
              ))
          }
        </div>
        }

       

    </section>
  )
}

export default LatestJobs