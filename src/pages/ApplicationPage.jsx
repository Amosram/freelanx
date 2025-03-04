import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { jobContext } from '../context/JobContext';

const ApplicationPage = () => {
    const {id} = useParams();
    console.log(id)
    const [error, setError] = useState('');
    const {serverUrl} = useContext(jobContext)
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
          return;
        }
    
        try {
          const response = await axios.post(serverUrl + `/api/jobs/job/${id}/apply`, formData, {
            headers: { Authorization: `Bearer ${token}` }
          });

          if (response.data.success) {
            alert("Applied Successifully")
          } else {
            alert("Failed to apply")
          }
       
        } catch (err) {
          setError(err.response?.data.msg || 'Failed to submit application');
          console.error('Application error:', err);
        }
    };

  return (
    <section className='flex justify-center'>
        <form onSubmit={handleSubmit} className='mt-8 border px-4 py-4 w-full md:w-[40%]'>
            <h1 className='flex justify-center gap-1 text-xl text-slate-700 border px-2 py-[2px]'>
                Applying to: 
                <span className='text-gd-2'>Software Engineer</span>
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
    </section>
  )
}

export default ApplicationPage