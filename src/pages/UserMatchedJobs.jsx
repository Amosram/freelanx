import React, {useState, useEffect, useContext} from 'react'
import JobCard from '../components/JobCard';
import axios from 'axios'
import {toast} from 'react-toastify'
import { jobContext } from '../context/JobContext';

const UserMatchedJobs = () => {
    const [jobList, setJobList] = useState([])
    const {serverUrl} = useContext(jobContext);

    const fetchJobs = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get(serverUrl + "/api/jobs/myJobs", {
          headers: {'Authorization': `Bearer ${token}`}
        });
        if (response.data.success) {
          setJobList(response.data.matchedJobs)
        }
      } catch (error) {
        console.log(error)
        toast.error(error.message)
      }
    }

    useEffect(()=> {
        fetchJobs();
        console.log(jobList)
    }, [])


  return (
    <section className='px-8' id='latestJobs'>

        <div className='text-center my-8'>
            <h1 className='text-slate-800 text-3xl font-medium'>Apply from a wide variety of Jobs </h1>
            <p className='text-slate-700 text-md mt-2 '>These jobs are displayed based on your profile details </p>
       
        </div>

        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mb-16'>
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

    </section>
  )
}

export default UserMatchedJobs