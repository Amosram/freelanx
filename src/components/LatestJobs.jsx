import React, { useEffect, useState } from 'react'
import { jobs } from '../assets/assets'
import JobCard from './JobCard';

const LatestJobs = () => {
    const [latestJobs, setLatestJobs] = useState([]);

    useEffect(()=> {
        setLatestJobs(jobs.slice(0, 9));
    }, [])

  return (
    <section className='px-8' id='latestJobs'>

        <div className='text-center mb-8'>
            <h1 className='text-slate-950 text-3xl font-medium'>Top Latest Jobs For You</h1>
        </div>

        <div className='grid sm:grid-cols-2 xl:grid-cols-3 gap-8'>
            {
                latestJobs.map((job, index) => (
                    <JobCard 
                    key={index} 
                    id={job._id} 
                    title={job.title} 
                    date={job.date} 
                    remote={job.remote} 
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

export default LatestJobs