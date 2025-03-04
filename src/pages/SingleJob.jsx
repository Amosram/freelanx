import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IoCalendarOutline } from "react-icons/io5";
import { PiCalendarXThin } from "react-icons/pi";
import { jobContext } from '../context/JobContext';
import axios from 'axios';



const SingleJob = () => {
  const {jobId} = useParams();
  const [jobData, setJobData] = useState(false);
  const {jobs} = useContext(jobContext)
  const [error, setError] = useState('');
  const {serverUrl, navigate} = useContext(jobContext)
  const [formData, setFormData] = useState({
      firstName:"", 
      secondName:"",
      school:"",
      course:"",
      degree:"",
      city:"",
      zipcode:"",
      resume: null,
      street:"",
      gpa:"",
      message:""
  })

  const fetchJobData = async () => {
    jobs.map((job) => {
      if (job._id === jobId) {
        setJobData(job);
      };
    })
  };

  const handleChange = (e) => {
      const {name, value} = e.target;
      setFormData({...formData, [name]: value});
  };

  const handleFileChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setFormData({ ...formData, resume: reader.result });
        };
        reader.readAsDataURL(file);
      }
  };

  const handleSubmit = async (e) => {
      e.preventDefault();
      const token = localStorage.getItem('token');
      if (!token) {
        setError('Please log in to apply');
        navigate('/login')
        return;
      }
  
      try {
        await axios.post(serverUrl + `/api/jobs/job/${jobId}/apply`, formData, {
          headers: { Authorization: `Bearer ${token}` }
        });

        navigate("/success");
     
      } catch (err) {
        setError(err.response?.data.msg || 'Failed to submit application');
        console.error('Application error:', err);
      }
  };
  
  useEffect(() => {
    fetchJobData();
  }, [jobId, jobs])

  return jobData ? (
    <div className='px-8 min-h-[60vh]'>
        <div className='min-h-[50vh] border mt-4 shadow-md px-4 py-4'>
          <div>
            <p className='text-lg md:text-2xl font-medium text-gd-2 mb-4'>{jobData.jobTitle}</p>
            <p className='flex flex-col md:flex-row gap-8 text-gray-600 mb-3'>
              <span className='flex items-center gap-2'>
                <IoCalendarOutline className='text-green-600'/>
                Posted: {jobData.date}</span>
              <span className='flex items-center gap-2'>
                <PiCalendarXThin className='text-red-700'/>
                Deadline: {jobData.deadline}</span>
            </p>
            <hr/>
          </div>

          <div className='mt-5 flex flex-col gap-4'>
            <p className='grid grid-cols-2 text-gray-600 w-full md:w-[30%]'>
              <span>Job Type</span>
              <span className='text-slate-800'>{jobData.jobType}</span>
            </p>
            <p className='grid grid-cols-2 text-gray-600 w-full md:w-[30%]' >
              <span>Qualification</span>
              <span className='text-slate-800'>{jobData.qualifications}</span>
            </p>
            <p className='grid grid-cols-2 text-gray-600 w-full md:w-[30%]' >
              <span>Experience</span>
              <span className='text-slate-800'>{jobData.experience}</span>
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
              <p className='text-slate-700'>{jobData.jobDescription}</p>
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

          <div className='flex items-center justify-center'>
            <form onSubmit={handleSubmit} className='mt-8 border px-4 py-4 w-full md:w-[40%]'>
              <h1 className='flex justify-center gap-1 text-xl text-slate-700 border px-2 py-[2px]'>
                  Apply Now To: 
                  <span className='text-gd-2'>{jobData.jobTitle}</span>
              </h1>

              <div className='mt-10 flex flex-col gap-4'>
                  <div className='flex flex-col md:flex-row gap-2'>
                      <input type='text' required placeholder='First Name' className='border px-2 py-1 w-full'
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                      />
                      <input type='text' required placeholder='Last Name' className='border px-2 py-1 w-full'
                          name="secondName"
                          value={formData.secondName}
                          onChange={handleChange}
                      />
                  </div>
                  <div className='flex gap-2'>
                      <input type='text' required placeholder='City' className='border px-2 py-1 w-full'
                          name="city"
                          value={formData.city}
                          onChange={handleChange}
                      />
                      <input type='text' required placeholder='Street' className='border px-2 py-1 w-full'
                          name="street"
                          value={formData.street}
                          onChange={handleChange}
                      />
                  </div>
                  <input type='text' placeholder='Zip Code' className='border px-2 py-1 w-full'
                      name="zipcode"
                      value={formData.zipcode}
                      onChange={handleChange}
                  />
                  <input type='text' placeholder='Institution' className='border px-2 py-1 w-full'
                      name="school"
                      value={formData.school}
                      onChange={handleChange}
                  />
                
                  <div className='flex flex-col md:flex-row gap-2'>
                      <input type='text' required placeholder='Degree e.g Masters' className='border px-2 py-1 w-full'
                          name="degree"
                          value={formData.degree}
                          onChange={handleChange}
                      />
                      <input type='text' required placeholder='Course e.g Computer Science' className='border px-2 py-1 w-full'
                          name="course"
                          value={formData.course}
                          onChange={handleChange}
                      />
                  </div>
                  <input type='text' placeholder='GPA' className='border px-2 py-1 w-full'
                      name="gpa"
                      value={formData.gpa}
                      onChange={handleChange}
                  />
                  <div>
                      <p className='text-slate-700'>Briefly describe below what you're capable of, area of specialization, skills and technologies you're profiecient in and why you chose to work for us.</p>
                      <textarea className='w-full resize-none border px-2 py-1' rows={6}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                      ></textarea>
                  </div>

                  <div className='flex flex-col gap-2'>
                      <p className='text-slate-700'>Resume/CV</p>
                      <input type='file' placeholder='Degree e.g Masters' className='border px-2 py-1 w-full cursor-pointer'  
                          accept='.pdf,image/*'
                          value={formData.institution}
                          onChange={handleFileChange}
                          required
                      />
                  </div>
                  <div className='flex items-start gap-1'>
                      <input type='checkbox' className='cursor-pointer mt-[6px] text-lg' required/>
                      <p className='text-slate-700'>By submiting , you agree to the job requirements and policy.</p>
                  </div>
                  <button type='submit' className='bg-grad text-gray-50 py-1 hover:shadow-md'>Submit</button>
              </div>
            </form>
          </div>
          
        </div>
    </div>
  ): (
    <div className="opacity-0">
      No jobs
    </div>
  );
};

export default SingleJob