import React from 'react'
import {FaPaperPlane, FaFacebookF, FaInstagram, FaGoogle, FaTwitter, FaYoutube} from 'react-icons/fa'

const Four = () => {
  return (
    <div className='grid grid-cols-1 gap-3'>
      <h1>
        SUSCRIBE
      </h1>
      <div className='border border-primary w-28 h-0'></div>
      <div className='flex flex-col gap-3'>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.  
        </span>
        <div className='flex justify-around'>
          <input type="email" placeholder='Enter your Email' className='bg-neutral-600 h-10 w-full' />
          <button className='bg-primary'>
            <div className='bg-primary w-10 h-10 flex items-center justify-center text-2xl'>
              <FaPaperPlane/>
            </div>
          </button>
        </div>
        <div className='flex flex-row justify-between gap-9'>
          <span className=' cursor-pointer hover:text-primary'>
            <FaFacebookF/>
          </span>
          <span className=' cursor-pointer hover:text-primary'>
            <FaInstagram/>
          </span>
          <span className=' cursor-pointer hover:text-primary'>
            <FaGoogle/>
          </span>
          <span className=' cursor-pointer hover:text-primary'>
            <FaTwitter/>
          </span>
          <span className=' cursor-pointer hover:text-primary'>
            <FaYoutube/>
          </span>
        </div>
      </div>
      
    </div>
  )
}

export default Four