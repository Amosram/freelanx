import React from 'react'
import Button from './Button'
import {Link} from 'react-scroll'

const Hero = () => {
  return (
    <section className='hero rounded-b-3xl'>
        <div className='text-center font-semibold flex flex-col items-center justify-center pt-36'>
            <h1 className='text-5xl md:text-6xl text-gd'>Welcome to freelanx </h1>

            <h3 className='text-5xl md:text-6xl text-gd'>Easily find a job of your choice</h3>

            <div className='flex gap-6 mt-16'> 
              <Link to='latestJobs' className='bg-grad px-6 py-[9px] hover:cursor-pointer shadow-md rounded-[30px] text-gray-100'>Find Your Next Dream Job</Link>
            </div>
        </div>  
    </section>
  )
}

export default Hero