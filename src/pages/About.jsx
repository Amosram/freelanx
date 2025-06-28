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
            <p>At Freelanx, we believe in connecting top-tier freelancers with businesses that need their skills. Our platform is designed to make hiring and working as a freelancer seamless, efficient, and rewarding.
            </p>
          </div>
          <div>
            <h3 className='text-xl text-slate-900 font-medium mt-2 mb-3'>What we do</h3>
            <p>At Freelanx, we bridge the gap between businesses and skilled freelancers, creating a seamless, secure, and efficient marketplace for remote work. Whether you're a company looking for top talent or a freelancer searching for exciting projects, we provide the tools and support to make collaboration effortless.
            </p>
          </div>
          <div>
            <h3 className='text-xl text-slate-900 font-medium mt-2 mb-3'>Our mision</h3>
            <p>To empower freelancers and businesses by creating a trusted, flexible, and high-quality marketplace where talent meets opportunity.
            </p>
          </div>
        </div>

        <div className='flex flex-col'>
          <h1 className='text-xl text-slate-900 font-medium mt-2 mb-3'>Our Team</h1>
          <div className='flex flex-col md:flex-row gap-6'>
            <div className='flex flex-col lg:flex-row gap-8 p-4 lg:p-0 shadow-md border lg:max-w-[50vw]'>
              <div className="w-full h-full flex-1">
                <img src={assets.ceoImg} className='w-full h-full' alt='Team Members Image'/>
              </div>
              <div className='pt-2 flex-1'>
                <h2 className='font-medium flex items-center gap-1'>Amos Rama
                  <MdVerified className='text-purple-700'/>
                </h2>
                <h3 className='text-sm font-medium mb-3'>CEO and Lead Software Engineer</h3>
                <p className='text-sm mb-4 pr-1'>As the founder of Freelanx, Amos Rama brings 7+ years of experience in Startups. With a deep understanding of the challenges freelancers and businesses face, Amos Rama built Freelanx to create a fair, efficient, and empowering platform for the future of work.</p>
                <div className='flex gap-4 mb-3' >
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
              <div className="w-full h-full flex-1">
                <img src={assets.ctoImg} className='w-full h-full' alt='Team Members Image'/>
              </div>
              <div className='pt-2 flex-1'>
                <h2 className='font-medium flex items-center gap-1'>Jessica Jones 
                  <MdVerified className='text-purple-700'/>
                </h2>
                <h3 className='text-sm font-medium mb-3'>CTO and Innovation Architect</h3>
                <p className='text-sm mb-4 pr-1'>As the driving force behind Freelanx's technical vision, Jessica Jones combines deep engineering expertise with a passion for building marketplace platforms that scale. With 6+ years of experience in SaaS and fintech, she ensures Freelanx stays at the cutting edge of freelance tech solutions.</p>
                <div className='flex gap-4 mb-3'>
                  <Link>
                    <FaInstagram className='text-lg text-slate-700'/>
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