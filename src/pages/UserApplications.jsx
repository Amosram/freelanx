import React, { useContext,useEffect, useState } from 'react'
import { GrStatusGood } from "react-icons/gr";
import { BiShapeSquare } from "react-icons/bi";
import {jobContext} from '../context/JobContext'
import axios from "axios"
import { RiDeleteBin6Line } from "react-icons/ri";

const UserApplications = () => {

  const [appliedJobs, setAppliedJobs] = useState([]);
  const [error, setError] = useState('');
  const {serverUrl} = useContext(jobContext);

  const fetchAppliedJobs = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Please log in to view your applied jobs');
      return;
    }

    try {
      const res = await axios.get(serverUrl + '/api/jobs/applied-jobs', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setAppliedJobs(res.data);
      setError('');
    } catch (err) {
      setError(err.response?.data.msg || 'Jobs loading, please wait...');
      console.error('Applied jobs fetch error:', err);
    }
  };

  const handleDeleteApplication = async (jobId) => {
    const token = localStorage.getItem('token');
    if (!token) {
      setError('Please log in to delete an application');
      return;
    }

    if (window.confirm('Are you sure you want to cancel this application?')) {
      try {
        await axios.delete(serverUrl + `/api/jobs/application/${jobId}/delete`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        // Refresh the list after deletion
        fetchAppliedJobs();
      } catch (err) {
        setError(err.response?.data.msg || 'Failed to delete application');
        console.error('Delete application error:', err);
      }
    }
  };

  useEffect(() => {
    fetchAppliedJobs(); // Initial fetch
    const interval = setInterval(fetchAppliedJobs, 5000); // Poll every 5 seconds
    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className='px-8 pt-4'>
        <h1 className='text-center text-lg md:text-3xl text-slate-700'>Jobs you have applied</h1>
        {error && <p className="error">{error}</p>}
        {appliedJobs.length === 0 && !error ? (
          <p className="text-center text-slate-800 text-xl mt-8">You haven’t applied to any jobs yet.</p>
        ) : (
          <div className='mt-8 grid grid-cols-1 gap-4'>
            {
              appliedJobs.map((job, index) => (
                <div key={index} className='border px-5 py-3 shadow-md flex justify-between items-center'>
                  <div>
                    <h1 className='text-gd-2 text-xl'>{job.title}</h1>
                    <p className='flex gap-2'>
                      <span className='text-slate-700'>Status:</span>
                      <span className='text-orange-500'>{job.application.status}</span>
                    </p>
                  </div>
                  <BiShapeSquare className='text-gray-600 text-5xl  px-2 '/>
                </div>
              ))
            }
      
          </div>
        )}
    </section>
  )
}

export default UserApplications