
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from 'react-router-dom';
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";



const Contact = () => {
    
  return (
    <section className='text-slate-800 px-8'>
      <div className='mb-10'>
        <div className='flex justify-center mb-10'>
          <h1 className='text-3xl border shadow-sm px-3 py-1 rounded-2xl font-medium w-fit my-6 '>Contact Us</h1>
        </div>

        <div className='grid lg:grid-cols-2 gap-10 sm:mx-6 lg:mx-0'>
          <div>
            <div className='mb-6 flex flex-col items-center lg:items-start'>
              <h1 className='text-slate-800 font-medium text-2xl mb-1'>For Any Query...</h1>
              <p>Quickly Send Us a Message.</p>
            </div>
            <form className='flex flex-col items-start gap-4'>
              <div className='flex flex-col w-full gap-4'>
                <input className='border border-slate-400 outline-none px-2 py-1 rounded-md focus:outline-slate-800/50' required type="text" placeholder='Your Name'/>
                <input className='border border-slate-400 outline-none px-2 py-1 rounded-md focus:outline-slate-800/50' required type="email" placeholder='Your Email'/>
                <input className='border border-slate-400 outline-none px-2 py-1 rounded-md focus:outline-slate-800/50' required type="text" placeholder='Subject'/>
              </div>
              <textarea placeholder='Message' className='w-full border border-slate-400 outline-none px-2 py-1 rounded-md resize-none  focus:outline-slate-800/50' required rows='6'></textarea>
              <button type='submit' className='bg-slate-900 text-white px-3 py-2 rounded-xl hover:bg-slate-700 duration-100'>Send Message</button>
            </form>
          </div>

          <div>
            <div className='mb-6'>
              <h1 className='text-slate-800 font-medium text-2xl mb-1'>Find Us</h1>
              <p>Follow Us</p>
            </div>

            <div className='flex flex-col gap-6'>
              <div className='flex gap-4'>
                <Link>
                  <FaSquareInstagram className='bg-white hover:text-slate-700 shadow-md border w-10 h-10 p-2 rounded-full'/>
                </Link>
                <Link>
                  <FaFacebook className='bg-white hover:text-slate-700 shadow-md border w-10 h-10 p-2 rounded-full'/>
                </Link>
                <Link>
                  <FaXTwitter className='bg-white hover:text-slate-700 shadow-md border w-10 h-10 p-2 rounded-full'/>
                </Link>
                <Link>
                  <FaLinkedin className='bg-white hover:text-slate-700 shadow-md border w-10 h-10 p-2 rounded-full'/>
                </Link>
                <Link>
                  <FaYoutube className='bg-white hover:text-slate-700 shadow-md border w-10 h-10 p-2 rounded-full'/>
                </Link>
              </div>
              <div className='flex items-center gap-3'>
                <FaLocationDot className='bg-white shadow-md border w-10 h-10 p-2 rounded-full'/>
                <div>
                  <p className='font-medium'>Address</p>
                  <p className='text-sm text-slate-600'>0100 CBD, Nairobi, Kenya</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <FaPhoneAlt className='bg-white shadow-md border w-10 h-10 p-2 rounded-full'/>
                <div>
                  <p className='font-medium'>Phone</p>
                  <p className='text-sm text-slate-600'>+254 752943240</p>
                </div>
              </div>
              <div className='flex items-center gap-3'>
                <MdEmail className='bg-white shadow-md border w-10 h-10 p-2 rounded-full'/>
                <div>
                  <p className='font-medium'>Email</p>
                  <p className='text-sm text-slate-600'>freelanxo@gamil.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact