import { assets } from "../assets/assets";
import { MdVerified } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import {Link} from 'react-router-dom'
import { FiExternalLink } from "react-icons/fi";




const About = () => {
  
  return (
    <section className='py-6 px-8'>
      <div className='text-slate-900 '>
        <div className='flex items-center justify-center gap-1 mb-10'>
          <h1 className='text-3xl border shadow-sm px-3 py-1 rounded-2xl font-medium'>About Us</h1>
        </div>

        <div className='text-slate-900 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-y-6 lg:gap-y-0 mb-10'>
          <div>
            <h3 className='text-xl text-slate-900 font-medium mt-2 mb-3'>Who we are</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nam iure harum reiciendis ipsum molestiae, rem quaerat assumenda quos aut vero hic adipisci vitae.
            </p>
          </div>
          <div>
            <h3 className='text-xl text-slate-900 font-medium mt-2 mb-3'>What we do</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nam iure harum reiciendis ipsum molestiae, rem quaerat assumenda quos aut vero hic adipisci vitae.
            </p>
          </div>
          <div>
            <h3 className='text-xl text-slate-900 font-medium mt-2 mb-3'>Our mision</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis nam iure harum reiciendis ipsum molestiae, rem quaerat assumenda quos aut vero hic adipisci vitae.
            </p>
          </div>
        </div>

        <div className='flex flex-col'>
          <h1 className='text-xl text-slate-900 font-medium mt-2 mb-3'>fitlo Team</h1>
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='flex flex-col lg:flex-row gap-8 p-4 lg:p-0 shadow-md border lg:max-w-[50vw]'>
              <div>
                <img src={assets.ceoImg} className='' alt='Team Members Image'/>
              </div>
              <div className='pt-2'>
                <h2 className='font-medium flex items-center gap-1'>Amos Rama
                  <MdVerified className='text-orange-900'/>
                </h2>
                <h3 className='text-sm font-medium mb-3'>Owner and Lead Software Engineer</h3>
                <p className='text-sm mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti deleniti consequatur vel quo? Ipsa odio fugiat ullam? Provident laborum perferendis dolorum fuga debitis.</p>
                <div className='flex gap-4'>
                  <Link>
                    <FaInstagram className='text-lg text-slate-700'/>
                  </Link>
                  <Link>
                    <FaGithub className='text-lg text-slate-700'/>
                  </Link>
                  <Link>
                    <FaLinkedin className='text-lg text-slate-700'/>
                  </Link>
                  <Link>
                    <FiExternalLink className='text-lg text-slate-700'/>
                  </Link>
                </div>
              </div>
            </div>
            <div className='flex flex-col lg:flex-row gap-8 p-4 lg:p-0 shadow-md border lg:max-w-[50vw]'>
              <div>
                <img src={assets.ceoImg} className='' alt='Team Members Image'/>
              </div>
              <div className='pt-2'>
                <h2 className='font-medium flex items-center gap-1'>Amos Rama
                  <MdVerified className='text-orange-900'/>
                </h2>
                <h3 className='text-sm font-medium mb-3'>Owner and Lead Software Engineer</h3>
                <p className='text-sm mb-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti deleniti consequatur vel quo? Ipsa odio fugiat ullam? Provident laborum perferendis dolorum fuga debitis.</p>
                <div className='flex gap-4'>
                  <Link>
                    <FaInstagram className='text-lg text-slate-700'/>
                  </Link>
                  <Link>
                    <FaGithub className='text-lg text-slate-700'/>
                  </Link>
                  <Link>
                    <FaLinkedin className='text-lg text-slate-700'/>
                  </Link>
                  <Link>
                    <FiExternalLink className='text-lg text-slate-700'/>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About