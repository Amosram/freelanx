import React, { useContext, useEffect, useState } from 'react'
import { HiUserCircle } from "react-icons/hi";
import { FaAngleRight } from "react-icons/fa6";
import { jobContext } from '../context/JobContext';
import axios from 'axios';
import {toast} from 'react-toastify';



const Profile = () => {
    const [isVisible, setIsVisible] = useState(true);
    const {serverUrl} = useContext(jobContext)
    const [profile, setProfile] = useState({
        categories: [],
        skills: [],
        experience: 0,
        bio: '',
        occupation:'',
        institution:'',
        degree:''
    })
    const username = localStorage.getItem("name");

    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };

    const hiddenStyle = { display: 'none' };
    const visibleStyle = { display: 'block' };

    useEffect(() => {
        const fetchProfile = async () => {
            const token = localStorage.getItem('token');
            const response = await axios.get(serverUrl + '/api/user/profile', {
               headers: {'Authorization': `Bearer ${token}` }
            });
            setProfile(response.data)
        }

        fetchProfile();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault();
        const token = localStorage.getItem('token');
        const response = await axios.put(serverUrl + '/api/user/profile', profile, {
          headers: { 'Authorization': `Bearer ${token}` }
        });
        setProfile(response.data)
        if (response.data.success) {
            toast.success(response.data.message)
            alert("Updated")
        } else {
            toast.error(response.data.message)
            alert("Failed to update profile")
        }
       
      };

  return (
    <div className='min-h-[60vh] md:min-h-[90vh] px-8 py-8'>
        <div className='border shadow-md min-h-[50vh] px-1 md:px-4 grid grid-cols-1 md:grid-cols-[200px_minmax(900px,_1fr)_100px]'>
            <div className='md:border-r-2 py-4 px-4 '>
                <div className='flex flex-col items-center'>
                    <h1 className='bg-grad flex items-center justify-center rounded-full text-3xl p-1 mb-2 text-gray-50 w-[70px] h-[70px]'>{username[0] + username[1]}</h1>
                    <p>{username}</p>
                </div>
                <hr className='mb-4'/>
             
                <p className='cursor-pointer bg-grad text-gray-50 mt-3 font-medium w-full py-1 px-2 text-center rounded-md mb-3' onClick={toggleVisibility}>Update Profile</p>
            </div>
          
            <div className='px-8 py-4 ' style={isVisible ? visibleStyle : hiddenStyle}> 
                <div className='flex flex-col gap-4 mb-6'>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>Occupation</p>
                        <p className='text-slate-900 bg-purple-100 w-fit py-1 px-2 border'>{profile.occupation}</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>Bio</p>
                        <p className='text-slate-900 w-full md:w-[50%] lg:w-full bg-purple-100  py-1 px-2 border'>{profile.bio}</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>Your Occupation Category</p>
                        <ul className='grid grid-cols-4 gap-1 text-slate-900 list-none w-full md:w-[50%] lg:w-full'>
                            {
                                profile.categories.map((category, index) => (
                                
                                    <li className='bg-purple-100 w-fit py-1 px-2 border' key={index}>{category}</li>  
                                
                                ))
                            }
                        </ul>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>Skills</p>
                        <ul className='grid grid-cols-4 text-slate-900 list-none w-full md:w-[50%] lg:w-full'>
                        {
                            profile.skills.map((skill, index) => (
                            
                                <li className='bg-purple-100 w-fit py-1 px-2 border' key={index}>{skill}</li>  
                            
                            ))
                        }
                        </ul>
                    </div>
                    
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>Experience</p>
                        <p className='text-slate-900 bg-purple-100 w-fit py-1 px-2 border'>{profile.experience}+ years</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>Insitution</p>
                        <p className='text-slate-900 bg-purple-100 w-fit py-1 px-2 border'>{profile.institution}</p>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <p className='text-slate-700'>Degree</p>
                        <p className='text-slate-900 bg-purple-100 w-fit py-1 px-2 border'>{profile.degree}</p>
                    </div>
                </div>
            </div>
            <form onSubmit={handleSubmit} className='px-8 py-4 ' style={isVisible ?  hiddenStyle : visibleStyle}> 
                <div className='flex flex-col gap-4'>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <label className='text-slate-700'>Occupation</label>
                        <input type='text' placeholder='e.g software engineer' className='text-slate-900 border px-4 py-[4px] w-full md:w-[70%]'
                        value={profile.occupation}
                        onChange={e => setProfile({
                            ...profile,
                            occupation: e.target.value
                        })}
                        />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <label className='text-slate-700'>About</label>
                        <textarea className='border w-full md:w-[70%] resize-none px-4 py-[4px]' placeholder='content...' cols={8} rows={5}
                        value={profile.bio}
                        onChange={e => setProfile({
                            ...profile,
                            bio: e.target.value
                        })}
                        ></textarea>
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <label className='text-slate-700'>Categories</label>
                        <input type='text' placeholder='e.g IT, business...' className='text-slate-900 border px-4 py-[4px] w-full md:w-[70%]'
                        value={profile.categories.join(',')}
                        onChange={e => setProfile({
                            ...profile,
                            categories: e.target.value.split(',')
                        })}
                        />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <label className='text-slate-700'>Skills</label>
                        <input type='text' placeholder='e.g react, python...' className='text-slate-900 border px-4 py-[4px] w-full md:w-[70%]'
                        value={profile.skills.join(',')}
                        onChange={e => setProfile({
                            ...profile,
                            skills: e.target.value.split(',')
                        })}
                        />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2 items-center'>
                        <label className='text-slate-700'>Experience</label>
                        <input type='number' placeholder='e.g 3 year(s)' className='text-slate-900 border px-4 py-[4px] w-full md:w-[70%]'
                        value={profile.experience}
                        onChange={e => setProfile({
                            ...profile,
                            experience: parseInt(e.target.value)
                        })}
                        />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <label className='text-slate-700'>Degree</label>
                        <input type='text' placeholder='e.g diploma' className='text-slate-900 border px-4 py-[4px] w-full md:w-[70%]'
                          value={profile.degree}
                          onChange={e => setProfile({
                              ...profile,
                              degree: e.target.value
                          })}
                        />
                    </div>
                    <div className='grid grid-cols-1 lg:grid-cols-2'>
                        <label className='text-slate-700'>Insitution</label>
                        <input type='text' placeholder='e.g zetech university' className='text-slate-900 border px-4 py-[4px] w-full md:w-[70%]'
                          value={profile.institution}
                          onChange={e => setProfile({
                              ...profile,
                              institution: e.target.value
                          })}
                        />
                    </div>

                    <div className='flex justify-center mt-6'>
                        <button type='submit' className='cursor-pointer bg-grad text-gray-50 mt-3 font-medium py-1 px-2 text-center rounded-md mb-3 w-[50%] '>Save</button>
                    </div>
                </div>
            </form>

        </div>
    </div>
  )
}

export default Profile